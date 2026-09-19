import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qz8_e4bzt.css';
import '../../css/d/dtko96bzy.css';
import '../../css/q/qgqytb5qf.css';
import '../../css/l/ls92xrn4m.css';
import '../../css/j/jlc4wnbwl.css';
import '../../css/f/f2k_wicen.css';
import '../../css/u/uonlqwb9d.css';
import '../../css/n/ny_x5dpsz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="qz8_e4bzt"/><path class="dtko96bzy"/><path class="qgqytb5qf"/><path clip-rule="evenodd" class="ls92xrn4m"/><path class="jlc4wnbwl"/><path class="f2k_wicen"/><path class="uonlqwb9d"/><path clip-rule="evenodd" class="ny_x5dpsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:wifi-outline"} {...others} />);
}

export default Component;
