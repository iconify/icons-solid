import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/r/rqf9totdd.css';
import '../../css/g/gr588uavq.css';
import '../../css/s/sv-ds5b4v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="rqf9totdd"/><path class="gr588uavq"/><path class="sv-ds5b4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:format"} {...others} />);
}

export default Component;
