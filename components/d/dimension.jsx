import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/p/p83hcbb5i.css';
import '../../css/b/bdhwjlbuv.css';
import '../../css/c/cdux-b05b.css';
import '../../css/o/oemdzc2_z.css';
import '../../css/k/kvdr5wc5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="p83hcbb5i"/><path class="bdhwjlbuv"/><path class="cdux-b05b"/><path class="oemdzc2_z"/><path class="kvdr5wc5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:dimension"} {...others} />);
}

export default Component;
