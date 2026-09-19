import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wezuzrbne.css';
import '../../css/z/zdvu-_b1d.css';
import '../../css/h/hsd4w5bnj.css';
import '../../css/h/hcuhg6bae.css';
import '../../css/n/npd1b2btd.css';
import '../../css/p/pskyktbhs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wezuzrbne"/><path class="zdvu-_b1d"/><path class="hsd4w5bnj"/><path class="hcuhg6bae"/><path class="npd1b2btd"/><path class="pskyktbhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:virgo"} {...others} />);
}

export default Component;
