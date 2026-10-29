import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sg8q3ybte.css';
import '../../css/a/aki7b3b1p.css';
import '../../css/z/z6fjk81kq.css';
import '../../css/v/v1jwuni6e.css';
import '../../css/j/jey06szin.css';
import '../../css/c/c3obu3b7o.css';
import '../../css/s/s47cg0b_p.css';
import '../../css/d/dcp11j1cr.css';
import '../../css/e/e4f-cxb6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="sg8q3ybte wm-shadow"/><path class="aki7b3b1p"/><path class="z6fjk81kq"/><path class="v1jwuni6e"/><path class="jey06szin"/><path class="c3obu3b7o"/><path class="s47cg0b_p"/><path class="dcp11j1cr wm-shine"/><path class="e4f-cxb6p wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:timer-reset"} {...others} />);
}

export default Component;
