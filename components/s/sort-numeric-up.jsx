import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwr_dwg1v.css';
import '../../css/i/ij4jxkbjm.css';
import '../../css/e/eui6ubbnm.css';
import '../../css/j/jg_dtjh4j.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="nwr_dwg1v"/><path class="ij4jxkbjm"/><path class="eui6ubbnm"/><path class="jg_dtjh4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:sort-numeric-up"} {...others} />);
}

export default Component;
