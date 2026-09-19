import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mwn3f8bfu.css';
import '../../css/w/w1btr7zag.css';
import '../../css/d/dcq-5rbfv.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="mwn3f8bfu"/><path clip-rule="evenodd" class="w1btr7zag"/><path class="dcq-5rbfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:pen-print"} {...others} />);
}

export default Component;
