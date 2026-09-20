import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dc_7a9b-l.css';
import '../../css/l/l_ozk_bzq.css';
import '../../css/r/rmh3v46zl.css';
import '../../css/r/rdo5sx2do.css';

const viewBox = {"width":105.833,"height":73.391};
const content = `<g class="dc_7a9b-l"><path class="l_ozk_bzq"/><path class="rmh3v46zl"/><path class="rdo5sx2do"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:commonwealth-bank"} {...others} />);
}

export default Component;
