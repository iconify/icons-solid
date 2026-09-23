import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xyxvqjafy.css';
import '../../css/e/evefg0bda.css';
import '../../css/p/phj2k4p3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xyxvqjafy"/><path class="evefg0bda"/><path class="phj2k4p3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mail-sparkles-duotone"} {...others} />);
}

export default Component;
