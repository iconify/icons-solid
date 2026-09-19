import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bojs4sbkp.css';
import '../../css/w/wsl0rnb5y.css';
import '../../css/p/pv76vcewr.css';
import '../../css/u/uu0pi1bcb.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bojs4sbkp"/><path clip-rule="evenodd" class="wsl0rnb5y"/><path class="pv76vcewr"/><path clip-rule="evenodd" class="uu0pi1bcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:kn"} {...others} />);
}

export default Component;
