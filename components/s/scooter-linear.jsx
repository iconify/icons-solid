import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/brb78ubne.css';
import '../../css/j/jtqkl-bna.css';
import '../../css/m/mhfqdbcrm.css';
import '../../css/i/imww9df-s.css';
import '../../css/i/ijh6inb8v.css';
import '../../css/f/frhhq-_pl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="brb78ubne"/><path class="jtqkl-bna"/><path class="mhfqdbcrm"/><path class="imww9df-s"/><path class="ijh6inb8v"/><circle class="frhhq-_pl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scooter-linear"} {...others} />);
}

export default Component;
