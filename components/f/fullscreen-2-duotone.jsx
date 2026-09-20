import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bb_e3rbxe.css';
import '../../css/l/lka2ohs0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bb_e3rbxe"/><path class="lka2ohs0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:fullscreen-2-duotone"} {...others} />);
}

export default Component;
