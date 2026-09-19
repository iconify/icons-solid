import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/a3pa-kb4l.css';
import '../../css/e/emsvcrbze.css';
import '../../css/s/s7hk-ccff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="a3pa-kb4l"/><path class="emsvcrbze"/><path class="s7hk-ccff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:quarantine-place-time-calendar-1"} {...others} />);
}

export default Component;
