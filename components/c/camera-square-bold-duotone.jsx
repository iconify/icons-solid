import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv_hji6de.css';
import '../../css/u/uhyw2tdeb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pv_hji6de"/><path clip-rule="evenodd" class="uhyw2tdeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:camera-square-bold-duotone"} {...others} />);
}

export default Component;
