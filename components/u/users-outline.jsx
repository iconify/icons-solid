import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/owtlytbtz.css';
import '../../css/j/jeiddxb6p.css';
import '../../css/t/t0tb6_4us.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="users-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="owtlytbtz"/><path class="jeiddxb6p"/><path class="t0tb6_4us"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:users-outline"} {...others} />);
}

export default Component;
