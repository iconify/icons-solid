import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/utd9avbad.css';
import '../../css/i/i24ag8-po.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="utd9avbad"/><path class="i24ag8-po"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:clapperboard-duotone"} {...others} />);
}

export default Component;
