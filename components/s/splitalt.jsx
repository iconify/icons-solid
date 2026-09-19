import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8ft-ub9s.css';

const viewBox = {"width":1026,"height":1025};
const content = `<path class="c8ft-ub9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:splitalt"} {...others} />);
}

export default Component;
