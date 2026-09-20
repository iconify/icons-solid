import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wncu4ybwr.css';
import '../../css/h/huvq51b5k.css';
import '../../css/v/v9f8_mb7i.css';
import '../../css/y/ycojdxpox.css';
import '../../css/v/vn1lscymh.css';
import '../../css/k/kgtyuwytc.css';
import '../../css/y/y4wsxi1xt.css';
import '../../css/u/uxxtwyums.css';
import '../../css/p/ph-mjcb4f.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wncu4ybwr"/><g class="huvq51b5k"><path clip-rule="evenodd" class="v9f8_mb7i"/><path class="ycojdxpox"/></g><path class="vn1lscymh"/><path class="kgtyuwytc"/><path class="y4wsxi1xt"/><path class="uxxtwyums"/><path class="ph-mjcb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:california-flag"} {...others} />);
}

export default Component;
