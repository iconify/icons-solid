import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bu1ghwbvs.css';
import '../../css/u/u3r-okbav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bu1ghwbvs"/><path class="u3r-okbav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:send-clock-two-tone"} {...others} />);
}

export default Component;
