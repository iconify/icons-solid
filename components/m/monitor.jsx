import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/t/thbe18u9p.css';
import '../../css/u/u7sn-mbbu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="thbe18u9p"/><path class="u7sn-mbbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:monitor"} {...others} />);
}

export default Component;
