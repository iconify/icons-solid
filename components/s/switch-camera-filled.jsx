import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zd9ezbbkw.css';
import '../../css/k/k_txi0raq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zd9ezbbkw"/><path class="k_txi0raq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:switch-camera-filled"} {...others} />);
}

export default Component;
