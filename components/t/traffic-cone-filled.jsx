import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxq908p6m.css';
import '../../css/m/mdkytublt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kxq908p6m"/><path class="mdkytublt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:traffic-cone-filled"} {...others} />);
}

export default Component;
