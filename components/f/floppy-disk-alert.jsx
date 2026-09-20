import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jnj0g8b4e.css';
import '../../css/g/gc_h-dblk.css';
import '../../css/m/m90cf4bfg.css';
import '../../css/t/t4aavpbvh.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="jnj0g8b4e"/><path class="gc_h-dblk"/><path class="m90cf4bfg"/><path class="t4aavpbvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:floppy-disk-alert"} {...others} />);
}

export default Component;
