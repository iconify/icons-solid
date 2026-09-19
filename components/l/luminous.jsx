import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dxrp_wb1b.css';
import '../../css/w/wbon9mbuk.css';
import '../../css/o/o8goosbdl.css';
import '../../css/n/nzr4hubbx.css';
import '../../css/z/zipvb6bax.css';
import '../../css/j/jn52qybmc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="dxrp_wb1b"/><path class="wbon9mbuk"/><path class="o8goosbdl"/><path class="nzr4hubbx"/><path class="zipvb6bax"/><path class="jn52qybmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:luminous"} {...others} />);
}

export default Component;
