import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v3gc3dbox.css';
import '../../css/e/ehsnx0a7z.css';
import '../../css/h/h1k300bfz.css';
import '../../css/b/b1gf1ebtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v3gc3dbox"/><path class="ehsnx0a7z"/><path class="h1k300bfz"/><path class="b1gf1ebtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:medical-box"} {...others} />);
}

export default Component;
