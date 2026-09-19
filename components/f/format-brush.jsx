import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/e/edzqosc2g.css';
import '../../css/v/vaa0ik_1j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="edzqosc2g"/><path class="vaa0ik_1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:format-brush"} {...others} />);
}

export default Component;
