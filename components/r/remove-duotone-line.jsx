import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukm9jj2re.css';
import '../../css/j/jaetm0bkr.css';
import '../../css/r/rvgkn7win.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG90xIDdrb"><g class="ukm9jj2re"><circle class="jaetm0bkr"/><path class="rvgkn7win"/></g></mask></defs><path mask="url(#SVG90xIDdrb)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:remove-duotone-line"} {...others} />);
}

export default Component;
