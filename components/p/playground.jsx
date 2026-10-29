import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bppap7_zo.css';
import '../../css/h/h_ij2h9ud.css';
import '../../css/v/vyi3yyb5k.css';
import '../../css/j/jhnb5sk1a.css';
import '../../css/o/omwlx-bya.css';
import '../../css/c/c2uqs3b5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bppap7_zo wm-k"/><path class="h_ij2h9ud wm-k"/><path class="vyi3yyb5k wm-k"/><path class="jhnb5sk1a wm-k"/><path class="omwlx-bya wm-k"/><path class="c2uqs3b5m wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:playground"} {...others} />);
}

export default Component;
