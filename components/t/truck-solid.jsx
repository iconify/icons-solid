import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/danwj1boq.css';
import '../../css/g/g4m0u7kux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="danwj1boq"/><path class="g4m0u7kux wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:truck-solid"} {...others} />);
}

export default Component;
