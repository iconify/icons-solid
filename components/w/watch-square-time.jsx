import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/kuw88bb_z.css';
import '../../css/o/oc0ue9hxo.css';
import '../../css/p/pddzioqkw.css';
import '../../css/p/p5wgn4bss.css';
import '../../css/r/rx7dr45fj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="kuw88bb_z"/><path class="oc0ue9hxo"/><path class="pddzioqkw"/><path class="p5wgn4bss"/><path class="rx7dr45fj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:watch-square-time"} {...others} />);
}

export default Component;
