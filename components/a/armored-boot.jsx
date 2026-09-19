import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/ugo6v-brk.css';
import '../../css/j/jzwmlgdul.css';
import '../../css/f/f1n3zg72f.css';
import '../../css/n/n6yi-hbmg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ugo6v-brk"/><path class="jzwmlgdul"/><path class="f1n3zg72f"/><path class="n6yi-hbmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:armored-boot"} {...others} />);
}

export default Component;
