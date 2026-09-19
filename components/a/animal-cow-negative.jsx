import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dm-oiia4i.css';
import '../../css/v/vhftcbbde.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsAnimalCowNegative0)" class="cuyn6tgcc"><path class="dm-oiia4i"/><path clip-rule="evenodd" class="vhftcbbde"/></g><defs><clipPath id="healthiconsAnimalCowNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:animal-cow-negative"} {...others} />);
}

export default Component;
