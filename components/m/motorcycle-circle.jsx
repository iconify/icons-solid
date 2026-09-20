import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/beua5bi0c.css';
import '../../css/r/rhp-kdofu.css';
import '../../css/u/u2ehrcbue.css';
import '../../css/a/aojepetud.css';
import '../../css/p/pgqbwlb5d.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="beua5bi0c"/><path clip-rule="evenodd" class="rhp-kdofu"/><path class="u2ehrcbue"/><path class="aojepetud"/><path clip-rule="evenodd" class="pgqbwlb5d"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:motorcycle-circle"} {...others} />);
}

export default Component;
