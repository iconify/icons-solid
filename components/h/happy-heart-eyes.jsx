import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tm_qsybka.css';
import '../../css/v/vdkkambso.css';
import '../../css/v/vy8kcme0f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tm_qsybka"/><path class="vdkkambso"/><path class="vy8kcme0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:happy-heart-eyes"} {...others} />);
}

export default Component;
