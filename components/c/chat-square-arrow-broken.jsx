import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bohwribke.css';
import '../../css/o/omavtbb2c.css';
import '../../css/f/fvf6w1p5c.css';
import '../../css/n/n_45qf4se.css';
import '../../css/f/fs9keeb2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bohwribke"/><path class="omavtbb2c"/><path class="fvf6w1p5c"/><path class="n_45qf4se"/><path class="fs9keeb2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-arrow-broken"} {...others} />);
}

export default Component;
