import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/d/d_u0cwbmf.css';
import '../../css/d/d3atdsbgl.css';
import '../../css/h/h4bucjbeq.css';
import '../../css/l/lc8k0r_ox.css';
import '../../css/y/y3b2hfbld.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="d_u0cwbmf"/><path class="d3atdsbgl"/><path class="h4bucjbeq"/><path class="lc8k0r_ox"/><path class="y3b2hfbld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:measuring-cup"} {...others} />);
}

export default Component;
