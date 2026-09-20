import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yoz1fh86x.css';
import '../../css/r/rjrlaonwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yoz1fh86x"/><path class="rjrlaonwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:monitor-recorder"} {...others} />);
}

export default Component;
