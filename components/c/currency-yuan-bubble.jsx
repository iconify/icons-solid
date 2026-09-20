import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ae66j7bsm.css';
import '../../css/k/k_z141bgb.css';
import '../../css/e/epvoifbiv.css';
import '../../css/l/l8pjxmb6t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ae66j7bsm"/><path class="k_z141bgb"/><path class="epvoifbiv"/><path class="l8pjxmb6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:currency-yuan-bubble"} {...others} />);
}

export default Component;
