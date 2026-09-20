import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/q/qk6g9fb7q.css';
import '../../css/t/tipezcn3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="qk6g9fb7q"/><path class="tipezcn3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sms-tracking"} {...others} />);
}

export default Component;
