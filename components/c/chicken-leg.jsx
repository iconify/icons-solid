import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iw8n6kbou.css';
import '../../css/e/evbnhsokq.css';
import '../../css/x/xh2dlp0mq.css';
import '../../css/s/sk78dqbib.css';
import '../../css/r/rod9hkbdu.css';
import '../../css/l/l2hljobne.css';
import '../../css/d/dhmcb15um.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="iw8n6kbou"/><path class="evbnhsokq"/><circle transform="rotate(135 42.193 40.071)" class="xh2dlp0mq"/><circle transform="rotate(135 40.072 42.192)" class="sk78dqbib"/><circle class="rod9hkbdu"/><circle class="l2hljobne"/><circle class="dhmcb15um"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chicken-leg"} {...others} />);
}

export default Component;
