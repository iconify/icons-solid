import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0dpx7b3y.css';

const viewBox = {"width":1026,"height":833};
const content = `<path class="d0dpx7b3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:playstation"} {...others} />);
}

export default Component;
