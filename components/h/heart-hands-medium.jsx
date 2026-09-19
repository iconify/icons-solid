import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pny3j9blh.css';
import '../../css/q/qczzyabmn.css';
import '../../css/i/i4kg29big.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="pny3j9blh"/><path clip-rule="evenodd" class="qczzyabmn"/><path class="i4kg29big"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:heart-hands-medium"} {...others} />);
}

export default Component;
