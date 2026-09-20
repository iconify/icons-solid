import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bs6ijty_d.css';
import '../../css/m/ml1qkfb8j.css';
import '../../css/b/bhfm3fbyt.css';
import '../../css/o/ozd1vo8_l.css';
import '../../css/m/mq6b24bgp.css';
import '../../css/e/eon-6iwgl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="bs6ijty_d"/><path class="ml1qkfb8j"/><path class="bhfm3fbyt"/><path class="ozd1vo8_l"/><path class="mq6b24bgp"/><path class="eon-6iwgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"unjs:hookable"} {...others} />);
}

export default Component;
