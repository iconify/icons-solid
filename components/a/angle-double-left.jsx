import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6fpu11wf.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="x6fpu11wf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:angle-double-left"} {...others} />);
}

export default Component;
