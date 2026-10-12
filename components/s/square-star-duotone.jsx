import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h0fqg75xv.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/f/fz4n4bcix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h0fqg75xv"/><path class="s1a2eew1e"/><path clip-rule="evenodd" class="fz4n4bcix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-star-duotone"} {...others} />);
}

export default Component;
