import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gpu-hnz2y.css';
import '../../css/q/qdsvvsbmf.css';
import '../../css/t/txojlohjj.css';
import '../../css/s/snfdzfbzp.css';
import '../../css/h/hokg7wb8o.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gpu-hnz2y"/><path class="qdsvvsbmf"/><path class="txojlohjj"/><path class="snfdzfbzp"/><path class="hokg7wb8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:queen-bold"} {...others} />);
}

export default Component;
