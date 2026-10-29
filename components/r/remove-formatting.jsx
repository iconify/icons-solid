import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d74_ywbpe.css';
import '../../css/r/r-xumibxr.css';
import '../../css/e/eihe3krvl.css';
import '../../css/n/ndkpydbpw.css';
import '../../css/k/k86o36bhe.css';
import '../../css/d/d8jscbcpe.css';
import '../../css/h/hofb4tt7n.css';
import '../../css/o/o_au2bb6x.css';
import '../../css/o/ome0v-w6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d74_ywbpe wm-shadow"/><path class="r-xumibxr wm-k"/><path class="eihe3krvl wm-k"/><path class="ndkpydbpw wm-s"/><path class="k86o36bhe wm-s"/><path class="d8jscbcpe wm-s"/><path class="hofb4tt7n wm-s"/><path class="o_au2bb6x wm-s"/><path class="ome0v-w6s wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:remove-formatting"} {...others} />);
}

export default Component;
