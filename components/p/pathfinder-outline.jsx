import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kfti2lb8m.css';
import '../../css/k/khfvsobvn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kfti2lb8m"/><path class="khfvsobvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:pathfinder-outline"} {...others} />);
}

export default Component;
