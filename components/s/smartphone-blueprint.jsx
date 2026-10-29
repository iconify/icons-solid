import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dab644bei.css';
import '../../css/f/f22o3bcfn.css';
import '../../css/z/zn-73g1qe.css';
import '../../css/h/hkcj5-bst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="dab644bei wm-deco"/><path class="f22o3bcfn wm-deco"/><path class="wm-k zn-73g1qe"/><path class="hkcj5-bst wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:smartphone-blueprint"} {...others} />);
}

export default Component;
