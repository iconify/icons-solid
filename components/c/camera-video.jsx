import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/vb8u5-y6r.css';
import '../../css/s/s4tyxebrk.css';
import '../../css/i/i9_cfqbdg.css';
import '../../css/g/gctu_7kde.css';
import '../../css/q/qi3z2zmgi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="vb8u5-y6r"/><path class="s4tyxebrk"/><path class="i9_cfqbdg"/><path class="gctu_7kde"/><path class="qi3z2zmgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:camera-video"} {...others} />);
}

export default Component;
