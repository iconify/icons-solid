import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ex7ta4b_g.css';
import '../../css/f/f-kxuolna.css';
import '../../css/x/xac8xcb0g.css';
import '../../css/e/ex2tlo8bg.css';
import '../../css/w/w0bfgxu-z.css';
import '../../css/y/y5bvnhhgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ex7ta4b_g"/><path class="f-kxuolna"/><path class="xac8xcb0g"/><path class="ex2tlo8bg"/><path class="w0bfgxu-z"/><path class="y5bvnhhgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shopping-basket-3"} {...others} />);
}

export default Component;
