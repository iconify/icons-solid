import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/w3ypecbxk.css';
import '../../css/i/ioeiiddno.css';
import '../../css/g/g0i5yeb2w.css';
import '../../css/q/qw99m5brg.css';
import '../../css/o/oqjhxxbfw.css';
import '../../css/n/nvfbgacfn.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="w3ypecbxk wm-shadow"/><path class="ioeiiddno"/><path class="g0i5yeb2w"/><path class="qw99m5brg"/><path class="oqjhxxbfw wm-shine"/><path class="nvfbgacfn wm-deco"/><path class="iqhjyybzt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chevrons-right"} {...others} />);
}

export default Component;
