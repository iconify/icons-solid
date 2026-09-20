import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqnsu1ghn.css';
import '../../css/q/qhk821_hs.css';
import '../../css/c/chn-qtbwh.css';
import '../../css/w/wddmtdw8j.css';
import '../../css/q/qc747e5vh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zqnsu1ghn"/><path class="qhk821_hs"/><path class="chn-qtbwh"/><path class="wddmtdw8j"/><path class="qc747e5vh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:industry-innovation-and-infrastructure"} {...others} />);
}

export default Component;
