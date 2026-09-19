import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gm0tef8vw.css';
import '../../css/f/ff15xgbwv.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsElectricityNegative0)" class="cuyn6tgcc"><path class="gm0tef8vw"/><path clip-rule="evenodd" class="ff15xgbwv"/></g><defs><clipPath id="healthiconsElectricityNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:electricity-negative"} {...others} />);
}

export default Component;
