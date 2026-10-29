import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zxsri-q4n.css';
import '../../css/m/mv2mjqber.css';
import '../../css/h/hm37c9bfo.css';
import '../../css/v/vallgacyy.css';
import '../../css/j/joww5sbhg.css';
import '../../css/i/i6yypgb-c.css';
import '../../css/i/ikc1aobqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco zxsri-q4n"/><path class="mv2mjqber wm-deco"/><path class="hm37c9bfo wm-deco"/><path class="vallgacyy wm-k"/><path class="joww5sbhg wm-a"/><path class="i6yypgb-c wm-s"/><path class="ikc1aobqm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lunar-drum-blueprint"} {...others} />);
}

export default Component;
