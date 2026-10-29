import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/b_l20ku1e.css';
import '../../css/q/qmauy_88m.css';
import '../../css/z/zee7-nbaw.css';
import '../../css/c/clsq4v3-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="b_l20ku1e wm-deco"/><path class="qmauy_88m wm-deco"/><path class="wm-k zee7-nbaw"/><path class="clsq4v3-l wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bread-blueprint"} {...others} />);
}

export default Component;
