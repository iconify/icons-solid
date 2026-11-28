import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_subqlkt.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q7qjpn1lr.css';
import '../../css/i/ipklc-bwj.css';
import '../../css/k/kmkz_xy3r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n_subqlkt secondary"/><g class="dt0cm9dhy primary"><path class="q7qjpn1lr"/><path class="ipklc-bwj"/><path class="kmkz_xy3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shopping-basket-duo"} {...others} />);
}

export default Component;
