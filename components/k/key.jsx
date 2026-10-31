import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwr3dg3yh.css';
import '../../css/j/jy_ejey5e.css';
import '../../css/e/e3qrz9bga.css';
import '../../css/z/z00stob1c.css';
import '../../css/g/gq37zibky.css';
import '../../css/i/is37v3bvr.css';
import '../../css/v/vvxdw7byj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iwr3dg3yh wm-k"/><path class="jy_ejey5e wm-deco"/><path class="e3qrz9bga wm-k"/><path class="wm-k z00stob1c"/><path class="gq37zibky wm-shadow"/><path class="is37v3bvr wm-shine"/><path class="vvxdw7byj wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:key"} {...others} />);
}

export default Component;
