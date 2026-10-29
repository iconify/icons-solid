import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gevz7ubpc.css';
import '../../css/y/ycgf2ek7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="gevz7ubpc"/><path class="wm-a ycgf2ek7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:coffee-solid"} {...others} />);
}

export default Component;
