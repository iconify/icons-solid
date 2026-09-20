import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c9_3kxc0d.css';
import '../../css/p/p0x19hkil.css';
import '../../css/k/ke0u3qm1x.css';
import '../../css/k/k_i7cvdsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c9_3kxc0d"/><path class="p0x19hkil"/><path class="ke0u3qm1x"/><path class="k_i7cvdsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ink"} {...others} />);
}

export default Component;
