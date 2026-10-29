import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hgn-75b4t.css';
import '../../css/z/zl0fbyblg.css';
import '../../css/h/h900o1u8p.css';
import '../../css/k/k32ibobjl.css';
import '../../css/f/f545reb7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="hgn-75b4t wm-deco"/><path class="wm-deco zl0fbyblg"/><path class="h900o1u8p wm-deco"/><path class="k32ibobjl wm-k"/><path class="f545reb7b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:baguette-blueprint"} {...others} />);
}

export default Component;
