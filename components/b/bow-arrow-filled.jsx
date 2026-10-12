import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6ppvcf2u.css';
import '../../css/s/s_xabeb6d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i6ppvcf2u"/><path class="s_xabeb6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bow-arrow-filled"} {...others} />);
}

export default Component;
