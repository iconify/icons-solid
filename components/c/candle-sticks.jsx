import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9l5qacpy.css';
import '../../css/t/t4a3_jblt.css';
import '../../css/y/ypjfbwbie.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n9l5qacpy"/><path class="t4a3_jblt"/><path class="ypjfbwbie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:candle-sticks"} {...others} />);
}

export default Component;
