import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/olkw-5b-j.css';
import '../../css/q/qhjzwr93d.css';
import '../../css/z/zeamq4byn.css';
import '../../css/s/shom5xbjc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="olkw-5b-j"/><path class="qhjzwr93d"/><path class="zeamq4byn"/><path class="shom5xbjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chart-pie-slice-duo"} {...others} />);
}

export default Component;
