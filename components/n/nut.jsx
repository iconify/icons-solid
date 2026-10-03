import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dwm76fkra.css';
import '../../css/c/cupedko2b.css';
import '../../css/w/wmzmx8bkg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dwm76fkra"/><path class="cupedko2b"/><path class="wmzmx8bkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:nut"} {...others} />);
}

export default Component;
