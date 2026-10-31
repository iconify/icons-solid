import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zfr9wp4tq.css';
import '../../css/y/yra4ieb5p.css';
import '../../css/w/wzpfvactk.css';
import '../../css/t/ty4ipub6e.css';
import '../../css/g/gbo2x1mdf.css';
import '../../css/k/k1xf4_bso.css';
import '../../css/w/wb3c7x6fa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="zfr9wp4tq"/><path class="yra4ieb5p"/><path class="wzpfvactk"/><path class="ty4ipub6e wm-shine"/><path class="gbo2x1mdf wm-k"/><path class="k1xf4_bso wm-a"/><path class="wb3c7x6fa wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-penguin"} {...others} />);
}

export default Component;
