import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/dmwn8n1ww.css';
import '../../css/g/g3hvgmbhd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="dmwn8n1ww"/><path class="g3hvgmbhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:music-note-2"} {...others} />);
}

export default Component;
