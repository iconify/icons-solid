import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nvskrpbiv.css';
import '../../css/h/h1ru3ab8h.css';
import '../../css/f/f8lgfinhu.css';
import '../../css/s/sbmqfhzny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nvskrpbiv"/><path class="h1ru3ab8h"/><path class="f8lgfinhu"/><path class="sbmqfhzny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ranking-broken"} {...others} />);
}

export default Component;
