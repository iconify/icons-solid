import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f7jhbfbbm.css';
import '../../css/i/ixdiu-boz.css';
import '../../css/k/kj8-njb7p.css';
import '../../css/t/tapiesbnb.css';
import '../../css/z/zv9ieru2c.css';
import '../../css/l/lv5wn9xyf.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f7jhbfbbm"/><path clip-rule="evenodd" class="ixdiu-boz"/><path clip-rule="evenodd" class="kj8-njb7p"/><path class="tapiesbnb"/><path clip-rule="evenodd" class="zv9ieru2c"/><path class="lv5wn9xyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:train"} {...others} />);
}

export default Component;
