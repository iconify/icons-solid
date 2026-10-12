import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o5hg3xkds.css';
import '../../css/f/fza34db2x.css';
import '../../css/p/pgn6o9bgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o5hg3xkds"/><path class="fza34db2x"/><path class="pgn6o9bgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:image-upscale-duotone"} {...others} />);
}

export default Component;
