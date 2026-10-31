import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zmlocfb9l.css';
import '../../css/d/dttl-cpxq.css';
import '../../css/z/zumocebti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow zmlocfb9l"/><path class="dttl-cpxq wm-shadow"/><path class="zumocebti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:arrow-up-from-line"} {...others} />);
}

export default Component;
