import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/w/w3py_bcea.css';
import '../../css/h/havgn5bgf.css';
import '../../css/c/cfyvl-o0i.css';
import '../../css/c/cwzlrubce.css';
import '../../css/w/wlnu1m5dz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="w3py_bcea"/><path class="havgn5bgf"/><path class="cfyvl-o0i"/><rect class="cwzlrubce"/><path class="wlnu1m5dz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:file-txt-one"} {...others} />);
}

export default Component;
