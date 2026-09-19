import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xp3b1xdon.css';
import '../../css/f/fruahub8w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="xp3b1xdon"/><path class="fruahub8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:thunderstorm-one"} {...others} />);
}

export default Component;
