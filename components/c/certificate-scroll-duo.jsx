import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t2qlxabla.css';
import '../../css/t/tjzpjrtvc.css';
import '../../css/l/lek275ekg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="t2qlxabla"/><path class="tjzpjrtvc"/><path class="lek275ekg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:certificate-scroll-duo"} {...others} />);
}

export default Component;
