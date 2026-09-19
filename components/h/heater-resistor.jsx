import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/b/b5ewnxibk.css';
import '../../css/q/q-jxeyn0g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect transform="rotate(-45 9.858 29.657)" class="b5ewnxibk"/><path class="q-jxeyn0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:heater-resistor"} {...others} />);
}

export default Component;
