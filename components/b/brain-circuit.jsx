import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yiinuyb4t.css';
import '../../css/p/p5yibub1q.css';
import '../../css/g/g9_jhfb4w.css';
import '../../css/q/qn50t2b4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow yiinuyb4t"/><path class="p5yibub1q wm-shadow"/><path class="g9_jhfb4w"/><path class="qn50t2b4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:brain-circuit"} {...others} />);
}

export default Component;
