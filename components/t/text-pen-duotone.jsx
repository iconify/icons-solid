import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5qy-bctl.css';
import '../../css/z/z9w1x66uv.css';
import '../../css/v/v5cvinb2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z5qy-bctl"/><path class="z9w1x66uv"/><path class="v5cvinb2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:text-pen-duotone"} {...others} />);
}

export default Component;
