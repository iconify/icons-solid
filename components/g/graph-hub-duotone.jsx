import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ynvucfr4t.css';
import '../../css/s/sejsv2htr.css';
import '../../css/f/fc-ta9bhu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ynvucfr4t"/><path class="sejsv2htr"/><path class="fc-ta9bhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:graph-hub-duotone"} {...others} />);
}

export default Component;
