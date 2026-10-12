import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s31bbjq4l.css';
import '../../css/f/ffsrxocry.css';
import '../../css/a/a-qr3fefb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s31bbjq4l"/><path class="ffsrxocry"/><path class="a-qr3fefb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tube-lotion-duotone"} {...others} />);
}

export default Component;
