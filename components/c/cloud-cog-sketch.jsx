import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yv00hmf2c.css';
import '../../css/y/yimpzkb5k.css';
import '../../css/u/uo7u3abxo.css';
import '../../css/p/pjuklj88t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k yv00hmf2c"/><path class="wm-k yimpzkb5k"/><path class="uo7u3abxo wm-k"/><path class="pjuklj88t wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-cog-sketch"} {...others} />);
}

export default Component;
