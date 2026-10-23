import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/vdww_1bdj.css';
import '../../css/u/u9vki6dgf.css';
import '../../css/v/vq9n9tz_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="vdww_1bdj"/><path class="u9vki6dgf"/><path class="vq9n9tz_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:store"} {...others} />);
}

export default Component;
