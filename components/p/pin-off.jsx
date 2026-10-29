import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzq0mxx4a.css';
import '../../css/a/av2tadbuy.css';
import '../../css/g/g-s6akbaa.css';
import '../../css/o/o6hugxbmc.css';
import '../../css/f/fprro3j9g.css';
import '../../css/g/ga11xsbqa.css';
import '../../css/f/fp2onrbch.css';
import '../../css/u/u93rkrbnr.css';
import '../../css/o/od6igul9x.css';
import '../../css/p/pjqqaqb6w.css';
import '../../css/v/v-0kyqcnl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow xzq0mxx4a"/><path class="av2tadbuy wm-k"/><path class="g-s6akbaa wm-k"/><path class="o6hugxbmc wm-k"/><path class="fprro3j9g wm-k"/><path class="ga11xsbqa wm-k"/><path class="fp2onrbch wm-shine"/><path class="u93rkrbnr wm-a"/><path class="od6igul9x wm-a"/><path class="pjqqaqb6w wm-s"/><path class="v-0kyqcnl wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:pin-off"} {...others} />);
}

export default Component;
