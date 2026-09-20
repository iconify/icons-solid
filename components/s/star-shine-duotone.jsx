import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e_863hlpn.css';
import '../../css/k/k77tqcqcu.css';
import '../../css/y/yo3f40bnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="e_863hlpn"/><path clip-rule="evenodd" class="k77tqcqcu"/><path class="yo3f40bnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:star-shine-duotone"} {...others} />);
}

export default Component;
