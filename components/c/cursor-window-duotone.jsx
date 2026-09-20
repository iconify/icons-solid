import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hdcnl1pkm.css';
import '../../css/m/mebe1hh7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hdcnl1pkm"/><path class="mebe1hh7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cursor-window-duotone"} {...others} />);
}

export default Component;
