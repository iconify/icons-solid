import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c56a9lb-w.css';
import '../../css/b/bjacz6u4t.css';
import '../../css/x/xow708eel.css';
import '../../css/a/a8-bwg2ry.css';
import '../../css/o/ohk1kib_d.css';
import '../../css/z/zgv39kuub.css';
import '../../css/f/feryqhb5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c56a9lb-w wm-k"/><path class="bjacz6u4t wm-s"/><path class="wm-deco xow708eel"/><path class="a8-bwg2ry wm-k"/><path class="ohk1kib_d wm-s"/><path class="wm-shadow zgv39kuub"/><path class="feryqhb5k wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:firecracker-string"} {...others} />);
}

export default Component;
