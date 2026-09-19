import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/u/umzxywbps.css';
import '../../css/s/ssdayxftq.css';
import '../../css/i/img_qobua.css';
import '../../css/z/zg2xogbif.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="umzxywbps"/><path class="ssdayxftq"/><path class="img_qobua"/><path class="zg2xogbif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:money-mouth-face"} {...others} />);
}

export default Component;
