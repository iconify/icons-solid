import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/y/yl8nvnbzd.css';
import '../../css/b/bf33dpbcm.css';
import '../../css/i/i79-xgbhl.css';
import '../../css/i/i41iyybok.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="yl8nvnbzd"/><path class="bf33dpbcm"/><path class="i79-xgbhl"/><path class="i41iyybok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:finance"} {...others} />);
}

export default Component;
