import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdf4ztcgy.css';
import '../../css/s/s0tt-qp-f.css';
import '../../css/a/a44wmpb2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kdf4ztcgy"/><path class="s0tt-qp-f"/><path class="a44wmpb2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:footprints-duotone"} {...others} />);
}

export default Component;
