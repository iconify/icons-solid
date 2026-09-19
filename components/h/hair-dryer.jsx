import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xzv_0hl8c.css';
import '../../css/a/apzaz9ymk.css';
import '../../css/c/cs-ztd51k.css';
import '../../css/u/uispk6bbi.css';
import '../../css/b/bx0fjsvjo.css';
import '../../css/k/k60hb4vsx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="xzv_0hl8c"/><path class="apzaz9ymk"/><path class="cs-ztd51k"/><path class="uispk6bbi"/><path class="bx0fjsvjo"/><path class="k60hb4vsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hair-dryer"} {...others} />);
}

export default Component;
