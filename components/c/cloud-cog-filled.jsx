import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0j5jlbnz.css';
import '../../css/l/lhpluxdub.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z0j5jlbnz"/><path class="lhpluxdub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-cog-filled"} {...others} />);
}

export default Component;
