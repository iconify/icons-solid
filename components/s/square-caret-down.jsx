import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlc0kwb3m.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="xlc0kwb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:square-caret-down"} {...others} />);
}

export default Component;
