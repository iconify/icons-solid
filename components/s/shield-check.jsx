import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/s/stg8vbb-s.css';
import '../../css/k/k4r9adc5a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="stg8vbb-s"/><path class="k4r9adc5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:shield-check"} {...others} />);
}

export default Component;
