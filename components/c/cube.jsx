import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gjxcmihdb.css';
import '../../css/j/jrsaxjese.css';
import '../../css/z/z9hi66_2l.css';
import '../../css/z/zu5iwbcvf.css';
import '../../css/x/x2a_b8b4d.css';
import '../../css/n/nsy127big.css';
import '../../css/a/a3_9tub5l.css';
import '../../css/c/ci4-wptfc.css';
import '../../css/h/hmez5uytz.css';
import '../../css/e/efpt0bc-v.css';
import '../../css/q/qr3vedbfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gjxcmihdb wm-shadow"/><path class="jrsaxjese wm-shadow"/><path class="z9hi66_2l"/><path class="zu5iwbcvf"/><path class="x2a_b8b4d"/><path class="nsy127big"/><path class="a3_9tub5l wm-shine"/><path class="ci4-wptfc wm-shine"/><path class="hmez5uytz"/><path class="efpt0bc-v"/><path class="qr3vedbfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:cube"} {...others} />);
}

export default Component;
