import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xwcz-viev.css';
import '../../css/v/vr_ofdcez.css';
import '../../css/e/eudukmbaz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xwcz-viev"/><path class="vr_ofdcez"/><path clip-rule="evenodd" class="eudukmbaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:passport-outline"} {...others} />);
}

export default Component;
