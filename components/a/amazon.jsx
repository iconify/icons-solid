import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l4pfilrbr.css';
import '../../css/m/mv74flbio.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3.5};
const content = `<g class="cuyn6tgcc"><path class="l4pfilrbr"/><path class="mv74flbio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:amazon"} {...others} />);
}

export default Component;
