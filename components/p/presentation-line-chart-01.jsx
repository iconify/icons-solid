import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hug9b6uqn.css';
import '../../css/g/g-2yoqbsw.css';
import '../../css/k/kyhrmps2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hug9b6uqn"/><path class="g-2yoqbsw"/><path class="kyhrmps2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:presentation-line-chart-01"} {...others} />);
}

export default Component;
