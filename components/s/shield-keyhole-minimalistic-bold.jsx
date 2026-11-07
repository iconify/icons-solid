import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx1_rzvjt.css';
import '../../css/c/cp3lf9pre.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kx1_rzvjt"/><path clip-rule="evenodd" class="cp3lf9pre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-keyhole-minimalistic-bold"} {...others} />);
}

export default Component;
