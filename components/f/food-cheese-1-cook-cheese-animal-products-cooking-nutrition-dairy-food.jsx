import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n70q_f8uv.css';
import '../../css/n/nik865bpl.css';
import '../../css/s/snb4dlb0c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="n70q_f8uv"/><circle class="nik865bpl"/><circle class="snb4dlb0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-cheese-1-cook-cheese-animal-products-cooking-nutrition-dairy-food"} {...others} />);
}

export default Component;
