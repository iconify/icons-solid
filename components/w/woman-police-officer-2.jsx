import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8lpc_55c.css';
import '../../css/b/byvgtobwi.css';
import '../../css/w/wnlqs5hzr.css';
import '../../css/r/rs4dgnhmr.css';
import '../../css/c/ccznvhyhc.css';
import '../../css/z/zaj91yhms.css';
import '../../css/i/iwyi7ebhv.css';
import '../../css/o/o1x_7uf1f.css';
import '../../css/f/f5e4_l65r.css';
import '../../css/a/axbcw7bjf.css';
import '../../css/l/lwqgkdblr.css';
import '../../css/v/v1b-i2b7i.css';
import '../../css/q/qm1duodns.css';
import '../../css/p/pxrcb_0ss.css';
import '../../css/o/oxyzn1bfw.css';
import '../../css/a/amzcw6b_w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o8lpc_55c"/><path class="byvgtobwi"/><path class="wnlqs5hzr"/><path class="rs4dgnhmr"/><path class="ccznvhyhc"/><path class="zaj91yhms"/><path class="iwyi7ebhv"/><path class="o1x_7uf1f"/><path class="f5e4_l65r"/><path class="axbcw7bjf"/><path class="lwqgkdblr"/><path class="v1b-i2b7i"/><path class="qm1duodns"/><path class="pxrcb_0ss"/><path class="oxyzn1bfw"/><path class="amzcw6b_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:woman-police-officer-2"} {...others} />);
}

export default Component;
