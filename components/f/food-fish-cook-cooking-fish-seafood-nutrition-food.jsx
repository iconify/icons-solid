import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k256bgpkp.css';
import '../../css/u/uq0564gvw.css';
import '../../css/t/t7plqdber.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="k256bgpkp"/><circle class="uq0564gvw"/><path class="t7plqdber"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-fish-cook-cooking-fish-seafood-nutrition-food"} {...others} />);
}

export default Component;
