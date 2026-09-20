import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/g0wdbbh0b.css';
import '../../css/i/i3pcmrmmi.css';
import '../../css/k/k3wcmpbyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="g0wdbbh0b"/><path class="i3pcmrmmi"/><path clip-rule="evenodd" class="k3wcmpbyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:radio-sharp-duotone"} {...others} />);
}

export default Component;
