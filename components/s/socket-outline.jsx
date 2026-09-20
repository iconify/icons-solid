import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/elyed7l1j.css';
import '../../css/g/g2ejn3rhn.css';
import '../../css/a/aldj5jhrk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="elyed7l1j"/><path class="g2ejn3rhn"/><path class="aldj5jhrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:socket-outline"} {...others} />);
}

export default Component;
