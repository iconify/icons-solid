import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mmw042bhe.css';
import '../../css/f/fruahub8w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="mmw042bhe"/><path class="fruahub8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:thunderstorm-one"} {...others} />);
}

export default Component;
