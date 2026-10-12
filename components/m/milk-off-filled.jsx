import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvw8s9b2p.css';
import '../../css/q/qq2gd69ng.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yvw8s9b2p"/><path class="qq2gd69ng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:milk-off-filled"} {...others} />);
}

export default Component;
