import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xij5-sdxx.css';
import '../../css/o/ojnzhtb1y.css';
import '../../css/b/b5n-ucq5r.css';
import '../../css/y/yrtm-dbfp.css';
import '../../css/l/l396xmbjk.css';
import '../../css/x/xuhyu_wwo.css';
import '../../css/l/loawuktok.css';
import '../../css/z/z-9lgob7b.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xij5-sdxx"/><path class="ojnzhtb1y"/><path class="b5n-ucq5r"/><path class="yrtm-dbfp"/><path class="l396xmbjk"/><path class="xuhyu_wwo"/><path class="loawuktok"/><path class="z-9lgob7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-with-headscarf-medium-skin-tone"} {...others} />);
}

export default Component;
