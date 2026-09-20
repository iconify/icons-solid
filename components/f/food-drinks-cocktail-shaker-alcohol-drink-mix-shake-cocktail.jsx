import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qhcl1ub_h.css';
import '../../css/n/nf1uv1baf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="qhcl1ub_h"/><path class="nf1uv1baf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-drinks-cocktail-shaker-alcohol-drink-mix-shake-cocktail"} {...others} />);
}

export default Component;
