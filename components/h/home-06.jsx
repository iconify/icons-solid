import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/apmqgc5sw.css';
import '../../css/g/gb26cr2ze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="apmqgc5sw"/><path class="gb26cr2ze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:home-06"} {...others} />);
}

export default Component;
