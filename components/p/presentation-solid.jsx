import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c0il4ubsc.css';
import '../../css/n/nb6gpuiqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="c0il4ubsc"/><path class="nb6gpuiqi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:presentation-solid"} {...others} />);
}

export default Component;
