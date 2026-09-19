import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/weu0f1tnv.css';
import '../../css/k/k4bxl8bfh.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="weu0f1tnv"/><path class="k4bxl8bfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:motobike"} {...others} />);
}

export default Component;
