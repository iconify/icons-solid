import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_m-zf91d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p_m-zf91d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sim-card-minimalistic-outline"} {...others} />);
}

export default Component;
