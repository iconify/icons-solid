import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ho8soe5tw.css';
import '../../css/e/estwjkbcw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ho8soe5tw"/><path class="estwjkbcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:chineseflag"} {...others} />);
}

export default Component;
