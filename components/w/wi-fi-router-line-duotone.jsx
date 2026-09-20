import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f36u_-bsw.css';
import '../../css/v/vjx83pbji.css';
import '../../css/p/pxumu3byy.css';
import '../../css/n/n_iooiclf.css';
import '../../css/h/h5ekkac1w.css';
import '../../css/x/xckxswbpz.css';
import '../../css/s/sgm0_f_wv.css';
import '../../css/a/a3pb16-fc.css';
import '../../css/a/az-mlfb7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f36u_-bsw"/><path class="vjx83pbji"/><path class="pxumu3byy"/><path class="n_iooiclf"/><path class="h5ekkac1w"/><path class="xckxswbpz"/><path class="sgm0_f_wv"/><path class="a3pb16-fc"/><path class="az-mlfb7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-router-line-duotone"} {...others} />);
}

export default Component;
