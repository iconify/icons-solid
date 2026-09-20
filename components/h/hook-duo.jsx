import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xps_-5liz.css';
import '../../css/u/uio6ieb3k.css';
import '../../css/l/lpzl-7giy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="xps_-5liz"/><path class="uio6ieb3k"/><path class="lpzl-7giy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:hook-duo"} {...others} />);
}

export default Component;
