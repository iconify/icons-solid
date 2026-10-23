import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n7ls9qrmc.css';
import '../../css/k/kmzkjgbdi.css';
import '../../css/z/zc8qvhbts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n7ls9qrmc"/><path class="kmzkjgbdi"/><path clip-rule="evenodd" class="zc8qvhbts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cpu-ai-duotone"} {...others} />);
}

export default Component;
