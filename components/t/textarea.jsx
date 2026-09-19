import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdbl3bnfw.css';
import '../../css/e/e2li34b1z.css';
import '../../css/x/xh-rjd76x.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="zdbl3bnfw"/><path class="e2li34b1z"/><path class="xh-rjd76x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:textarea"} {...others} />);
}

export default Component;
