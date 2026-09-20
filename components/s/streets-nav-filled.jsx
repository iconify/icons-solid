import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/srx7wjd9z.css';
import '../../css/m/mobgigbae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="srx7wjd9z"/><path class="mobgigbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:streets-nav-filled"} {...others} />);
}

export default Component;
