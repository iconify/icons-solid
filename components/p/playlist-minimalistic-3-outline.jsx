import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcu_ujjgo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lcu_ujjgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playlist-minimalistic-3-outline"} {...others} />);
}

export default Component;
