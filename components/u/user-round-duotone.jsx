import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pthc7kbbw.css';
import '../../css/i/ig-kolbmk.css';
import '../../css/p/plk3fn3le.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pthc7kbbw"/><path class="ig-kolbmk"/><path class="plk3fn3le"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-round-duotone"} {...others} />);
}

export default Component;
