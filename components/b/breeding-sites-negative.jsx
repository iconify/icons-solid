import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rgem26lze.css';
import '../../css/e/etp1bc4hg.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsBreedingSitesNegative0)" class="cuyn6tgcc"><path class="rgem26lze"/><path clip-rule="evenodd" class="etp1bc4hg"/></g><defs><clipPath id="healthiconsBreedingSitesNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:breeding-sites-negative"} {...others} />);
}

export default Component;
