import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vksa67bwp.css';
import '../../css/a/a69dcsztw.css';
import '../../css/k/kq-cpj84d.css';
import '../../css/f/fp63xlp6c.css';
import '../../css/o/of96nnyan.css';
import '../../css/f/foar_kbya.css';
import '../../css/y/yutsmibmw.css';
import '../../css/k/kc9f61bah.css';
import '../../css/d/ddpushbaj.css';
import '../../css/s/swg_xm4dk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="vksa67bwp"/><path class="a69dcsztw"/><path class="kq-cpj84d"/><path class="fp63xlp6c"/><path class="of96nnyan"/><path class="foar_kbya"/><path class="yutsmibmw"/><path class="kc9f61bah"/><path class="ddpushbaj"/><path class="swg_xm4dk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"unjs:webpackbar"} {...others} />);
}

export default Component;
