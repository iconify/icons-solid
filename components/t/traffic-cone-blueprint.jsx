import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p5cknqbql.css';
import '../../css/q/qr4e8fbrr.css';
import '../../css/h/hl0_bw20q.css';
import '../../css/j/jzl_cf7kn.css';
import '../../css/o/oltgd75vl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="p5cknqbql wm-deco"/><path class="qr4e8fbrr wm-deco"/><path class="hl0_bw20q wm-deco"/><path class="jzl_cf7kn wm-k"/><path class="oltgd75vl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:traffic-cone-blueprint"} {...others} />);
}

export default Component;
