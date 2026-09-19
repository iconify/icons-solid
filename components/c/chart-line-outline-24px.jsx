import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sx571qbiw.css';
import '../../css/w/w9qq0ybth.css';
import '../../css/g/gfvbhrbka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="sx571qbiw"/><path clip-rule="evenodd" class="w9qq0ybth"/><path clip-rule="evenodd" class="gfvbhrbka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:chart-line-outline-24px"} {...others} />);
}

export default Component;
