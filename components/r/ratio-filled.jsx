import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dz_m0fb4u.css';
import '../../css/y/yuu2iyljg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dz_m0fb4u"/><path clip-rule="evenodd" class="yuu2iyljg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ratio-filled"} {...others} />);
}

export default Component;
