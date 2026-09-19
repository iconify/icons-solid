import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/snxutd7hc.css';
import '../../css/f/fixejbb6s.css';
import '../../css/j/jy-l3zb_e.css';
import '../../css/b/bppzueb6d.css';
import '../../css/k/kwysvy96i.css';
import '../../css/c/c713-nflz.css';
import '../../css/u/u_ad4bbaa.css';
import '../../css/f/f5tq5acha.css';
import '../../css/s/si5cpkb-r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="snxutd7hc"/><path class="fixejbb6s"/><path class="jy-l3zb_e"/><path clip-rule="evenodd" class="bppzueb6d"/><path class="kwysvy96i"/><path class="c713-nflz"/><path class="u_ad4bbaa"/><path class="f5tq5acha"/><path class="si5cpkb-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:shaking-face"} {...others} />);
}

export default Component;
