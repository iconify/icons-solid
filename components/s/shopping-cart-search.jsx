import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tymvncb0s.css';
import '../../css/m/m3he6ybrq.css';
import '../../css/l/lhpuzx8ac.css';
import '../../css/i/i3uz7wbfw.css';
import '../../css/t/ts9rss-dx.css';
import '../../css/h/hpmkbmbcd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tymvncb0s"/><path class="m3he6ybrq"/><path class="lhpuzx8ac"/><path class="i3uz7wbfw"/><path class="ts9rss-dx"/><path class="hpmkbmbcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:shopping-cart-search"} {...others} />);
}

export default Component;
