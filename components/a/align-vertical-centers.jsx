import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/krzm0-bqz.css';
import '../../css/x/x-7ribc8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="krzm0-bqz"/><path class="x-7ribc8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:align-vertical-centers"} {...others} />);
}

export default Component;
