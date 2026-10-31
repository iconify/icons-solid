import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lqg1sds5j.css';
import '../../css/s/sjok7_pru.css';
import '../../css/r/rgpp5pbiq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lqg1sds5j"/><path class="sjok7_pru"/><path class="rgpp5pbiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ball-wave-duotone"} {...others} />);
}

export default Component;
