import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/negqytxaq.css';
import '../../css/r/ru8p9tu8b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="negqytxaq"/><path class="ru8p9tu8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:player"} {...others} />);
}

export default Component;
