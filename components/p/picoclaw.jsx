import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nqr9fgqwg.css';
import '../../css/j/jtr02pbrt.css';
import '../../css/y/y9_6rib7d.css';
import '../../css/f/fc0hd6btk.css';
import '../../css/t/t1ev69m5t.css';
import '../../css/i/i3uhml4yl.css';
import '../../css/x/xgfr-62wv.css';
import '../../css/c/cctldebyn.css';
import '../../css/s/s6ketqbdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><ellipse class="nqr9fgqwg"/><ellipse class="jtr02pbrt"/><path class="y9_6rib7d"/><circle class="fc0hd6btk"/><circle class="t1ev69m5t"/><path class="i3uhml4yl"/><rect class="xgfr-62wv"/><rect class="cctldebyn"/><path class="s6ketqbdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:picoclaw"} {...others} />);
}

export default Component;
