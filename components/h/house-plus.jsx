import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jf8khup_j.css';
import '../../css/n/ns192kvnn.css';
import '../../css/n/nmkvyox4w.css';
import '../../css/z/zojuovb7p.css';
import '../../css/d/dsgtj7bqy.css';
import '../../css/s/sy-bg3qlw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jf8khup_j wm-shadow"/><path class="ns192kvnn"/><path class="nmkvyox4w"/><path class="zojuovb7p"/><path class="dsgtj7bqy"/><path class="sy-bg3qlw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:house-plus"} {...others} />);
}

export default Component;
