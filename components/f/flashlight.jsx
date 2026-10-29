import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auqpdh8gh.css';
import '../../css/h/hpp55sboq.css';
import '../../css/e/e1ty5p2le.css';
import '../../css/f/fo9iywbcx.css';
import '../../css/r/rbdjcebqg.css';
import '../../css/o/of9w-ibgv.css';
import '../../css/t/t2tr9lbcp.css';
import '../../css/j/j-ov07byn.css';
import '../../css/u/us3y92pua.css';
import '../../css/e/edl-nyaur.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="auqpdh8gh wm-shadow"/><path class="hpp55sboq wm-k"/><path class="e1ty5p2le wm-k"/><path class="fo9iywbcx wm-k"/><path class="rbdjcebqg wm-k"/><path class="of9w-ibgv wm-k"/><path class="t2tr9lbcp wm-shine"/><path class="j-ov07byn wm-a"/><path class="us3y92pua wm-s"/><path class="edl-nyaur wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:flashlight"} {...others} />);
}

export default Component;
