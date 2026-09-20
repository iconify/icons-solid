import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xxriqybqc.css';
import '../../css/q/qu9z20bxo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="xxriqybqc"/><path class="qu9z20bxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-ice-cream-2-cook-frozen-food-popsicle-freezer-nutrition-cream-stick-cold-ice-cooking"} {...others} />);
}

export default Component;
