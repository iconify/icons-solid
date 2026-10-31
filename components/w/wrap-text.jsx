import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4scioble.css';
import '../../css/s/sn40r0cja.css';
import '../../css/n/nabw--6js.css';
import '../../css/s/snvqygbjf.css';
import '../../css/v/vff4pl40y.css';
import '../../css/i/i6xft6iza.css';
import '../../css/e/elzj1wyuu.css';
import '../../css/p/pwnjynjlj.css';
import '../../css/x/x5igznbpe.css';
import '../../css/g/g-38l1i6f.css';
import '../../css/l/lq0jqot0g.css';
import '../../css/h/hpogo8btb.css';
import '../../css/o/otdma28oi.css';
import '../../css/z/zmv5_n8cg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l4scioble wm-shadow"/><path class="sn40r0cja wm-k"/><path class="nabw--6js wm-k"/><path class="snvqygbjf wm-k"/><path class="vff4pl40y wm-shine"/><path class="i6xft6iza wm-a"/><path class="elzj1wyuu wm-a"/><path class="pwnjynjlj wm-a"/><path class="wm-a x5igznbpe"/><path class="g-38l1i6f wm-shine"/><path class="lq0jqot0g wm-k"/><path class="hpogo8btb wm-k"/><path class="otdma28oi wm-k"/><path class="wm-shine zmv5_n8cg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:wrap-text"} {...others} />);
}

export default Component;
