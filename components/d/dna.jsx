import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2fug-b_y.css';
import '../../css/m/mw88km0cg.css';
import '../../css/x/xbods-y9l.css';
import '../../css/z/ze07fr-gh.css';
import '../../css/o/oyk7atbav.css';
import '../../css/s/sxx7ubwmj.css';
import '../../css/g/gszoyo_fb.css';
import '../../css/n/nsparjb0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f2fug-b_y wm-shadow"/><path class="mw88km0cg wm-k"/><path class="wm-k xbods-y9l"/><path class="wm-k ze07fr-gh"/><path class="oyk7atbav wm-k"/><path class="sxx7ubwmj wm-k"/><path class="gszoyo_fb wm-k"/><path class="nsparjb0t wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:dna"} {...others} />);
}

export default Component;
