import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f29fwjbso.css';
import '../../css/b/bvyv-3bdn.css';
import '../../css/n/nvb2z2bwt.css';
import '../../css/n/nhf-_jn5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f29fwjbso"/><path class="bvyv-3bdn"/><path clip-rule="evenodd" class="nvb2z2bwt"/><path class="nhf-_jn5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:flower-duotone"} {...others} />);
}

export default Component;
