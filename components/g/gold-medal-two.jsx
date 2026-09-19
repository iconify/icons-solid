import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-_5gtb7v.css';
import '../../css/d/dsq233cfw.css';
import '../../css/k/k55a8zebe.css';
import '../../css/x/xmrhqsb8p.css';
import '../../css/j/jord0ubjd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="p-_5gtb7v"/><path class="dsq233cfw"/><path class="k55a8zebe"/><path class="xmrhqsb8p"/><path class="jord0ubjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:gold-medal-two"} {...others} />);
}

export default Component;
