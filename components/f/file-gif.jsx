import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/me56_79sn.css';
import '../../css/n/niqzbij3h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="me56_79sn"/><path class="niqzbij3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:file-gif"} {...others} />);
}

export default Component;
