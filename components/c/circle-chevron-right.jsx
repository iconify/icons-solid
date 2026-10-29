import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wg6agab_p.css';
import '../../css/t/t0-ajfn1i.css';
import '../../css/u/ux-y9b10x.css';
import '../../css/f/fdf08cccu.css';
import '../../css/w/wrlxvccap.css';
import '../../css/i/inej56biq.css';
import '../../css/g/gx8_28nfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wg6agab_p wm-k"/><path class="t0-ajfn1i wm-k"/><path class="ux-y9b10x wm-k"/><path class="fdf08cccu wm-shine"/><path class="wm-a wrlxvccap"/><path class="inej56biq wm-a"/><path class="gx8_28nfa wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:circle-chevron-right"} {...others} />);
}

export default Component;
