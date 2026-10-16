import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbgn9e5js.css';
import '../../css/w/wtareoujg.css';
import '../../css/l/lehndqbef.css';
import '../../css/i/iq34384rn.css';
import '../../css/k/ke591hbbt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nbgn9e5js"/><path class="wtareoujg"/><path class="lehndqbef"/><path class="iq34384rn"/><path class="ke591hbbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:busbar-48-bold"} {...others} />);
}

export default Component;
