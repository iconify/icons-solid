import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1w-ygbvz.css';
import '../../css/y/y6ka65b-l.css';
import '../../css/j/jvaqzdbnk.css';
import '../../css/i/ip-7frbkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b1w-ygbvz"/><path class="y6ka65b-l"/><path class="jvaqzdbnk"/><path clip-rule="evenodd" class="ip-7frbkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:university-duotone"} {...others} />);
}

export default Component;
