import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dxw8tob6b.css';
import '../../css/r/rb1go8b8k.css';
import '../../css/j/jungtnbno.css';
import '../../css/f/f1abxubzw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="dxw8tob6b"/><path class="rb1go8b8k"/><path class="jungtnbno"/><circle class="f1abxubzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-meat-cook-meat-cown-slice-organic-cooking-nutrition-food"} {...others} />);
}

export default Component;
