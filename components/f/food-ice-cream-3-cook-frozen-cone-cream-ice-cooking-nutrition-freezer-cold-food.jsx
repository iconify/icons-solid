import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t-b7fdbhs.css';
import '../../css/g/gz7n-81kv.css';
import '../../css/b/b3mc-lb0h.css';
import '../../css/j/jhu4z6bfn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="t-b7fdbhs"/><circle class="gz7n-81kv"/><path class="b3mc-lb0h"/><circle class="jhu4z6bfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-ice-cream-3-cook-frozen-cone-cream-ice-cooking-nutrition-freezer-cold-food"} {...others} />);
}

export default Component;
