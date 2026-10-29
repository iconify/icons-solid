import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mkuitqbfl.css';
import '../../css/k/kodab1bmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mkuitqbfl wm-deco"/><path class="kodab1bmu wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sigma-sketch"} {...others} />);
}

export default Component;
