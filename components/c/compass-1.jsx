import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vhu2almdx.css';
import '../../css/t/tpek4zp-m.css';
import '../../css/s/siyi_abkh.css';
import '../../css/b/bosiir7zi.css';
import '../../css/v/v7tmoibra.css';
import '../../css/e/ej65a4b8r.css';
import '../../css/x/x3wjx54tk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vhu2almdx"/><path class="tpek4zp-m"/><path class="siyi_abkh"/><path class="bosiir7zi"/><path class="v7tmoibra"/><path class="ej65a4b8r"/><path class="x3wjx54tk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:compass-1"} {...others} />);
}

export default Component;
