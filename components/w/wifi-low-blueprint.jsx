import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nrlirxy2k.css';
import '../../css/y/yxavwr9yf.css';
import '../../css/f/fle9zy2qg.css';
import '../../css/m/mn3s37b7a.css';
import '../../css/n/n4g7kqb8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="nrlirxy2k wm-deco"/><path class="wm-deco yxavwr9yf"/><path class="fle9zy2qg wm-deco"/><path class="mn3s37b7a"/><path class="n4g7kqb8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wifi-low-blueprint"} {...others} />);
}

export default Component;
