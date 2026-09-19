import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/c/c5faowpqd.css';
import '../../css/f/fm_ve5bbr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="c5faowpqd"/><path class="fm_ve5bbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:parachute"} {...others} />);
}

export default Component;
