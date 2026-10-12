import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdei6-b8p.css';
import '../../css/s/sdpl1vxew.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zdei6-b8p"/><path class="sdpl1vxew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shield-lock-filled"} {...others} />);
}

export default Component;
