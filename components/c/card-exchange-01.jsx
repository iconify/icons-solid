import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nfxwups2m.css';
import '../../css/f/fhmjgx_zw.css';
import '../../css/g/g6wm6g5mh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nfxwups2m"/><path class="fhmjgx_zw"/><path class="g6wm6g5mh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:card-exchange-01"} {...others} />);
}

export default Component;
