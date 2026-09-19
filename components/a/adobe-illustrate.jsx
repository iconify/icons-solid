import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/u/uqbu0ghtz.css';
import '../../css/w/wuqdyi28t.css';
import '../../css/u/uptm_lbtv.css';
import '../../css/v/vc4imw9xx.css';
import '../../css/l/lsjkoxbpf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="utf5_xbzs"/><path class="uqbu0ghtz"/><path class="wuqdyi28t"/><path class="uptm_lbtv"/><path class="vc4imw9xx"/><path class="lsjkoxbpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:adobe-illustrate"} {...others} />);
}

export default Component;
