import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok9qob__s.css';

const viewBox = {"width":1025,"height":1025};
const content = `<path class="ok9qob__s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:canvas"} {...others} />);
}

export default Component;
