import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/emu-7v7ar.css';
import '../../css/o/od-yz7gaj.css';
import '../../css/y/ytjb6mb-l.css';
import '../../css/n/nmg90_b5o.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="emu-7v7ar"/><path class="od-yz7gaj"/><path class="ytjb6mb-l"/><path class="nmg90_b5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:inbox-favorite"} {...others} />);
}

export default Component;
