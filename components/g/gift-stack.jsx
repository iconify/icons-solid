import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/m0y0vys4k.css';
import '../../css/o/ojoagmbpt.css';
import '../../css/u/ub3tv7bue.css';
import '../../css/s/srqnpzlqw.css';
import '../../css/z/zjgvabcro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="m0y0vys4k wm-shadow"/><path class="ojoagmbpt wm-shadow"/><path class="ub3tv7bue"/><path class="srqnpzlqw"/><path class="zjgvabcro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:gift-stack"} {...others} />);
}

export default Component;
