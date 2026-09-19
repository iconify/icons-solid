import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/id181bcnn.css';
import '../../css/c/ccbzd-njr.css';
import '../../css/m/mhb741-jf.css';
import '../../css/q/qq6j8u6ds.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="id181bcnn"/><path class="ccbzd-njr"/><path class="mhb741-jf"/><path class="qq6j8u6ds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:palm-tree-duo"} {...others} />);
}

export default Component;
