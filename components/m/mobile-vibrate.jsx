import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjglgob4e.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/o/o57y7abgr.css';
import '../../css/o/o-hdpccfe.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGs3DbYYGF" class="jjglgob4e"/></defs><g class="ft5dv1b6b"><use href="#SVGs3DbYYGF"/><g class="p_3zmsvya"><path class="o57y7abgr"/><use href="#SVGs3DbYYGF"/></g><path class="o-hdpccfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mobile-vibrate"} {...others} />);
}

export default Component;
