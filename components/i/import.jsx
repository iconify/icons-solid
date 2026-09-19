import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrf_6acoy.css';
import '../../css/h/hqopdobjp.css';
import '../../css/a/ainv9nbwz.css';
import '../../css/s/s90z_9bhz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xrf_6acoy"/><g class="hqopdobjp"><path class="ainv9nbwz"/><path class="s90z_9bhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:import"} {...others} />);
}

export default Component;
