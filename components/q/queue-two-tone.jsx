import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jsp63q5wp.css';
import '../../css/u/u8kg8-2of.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jsp63q5wp"/><path class="u8kg8-2of"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:queue-two-tone"} {...others} />);
}

export default Component;
