import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnun2klcg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zdu-dcbfe.css';
import '../../css/f/fon0b9_ly.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dnun2klcg secondary"/><g class="dt0cm9dhy primary"><path class="zdu-dcbfe"/><path class="fon0b9_ly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:milestone-duo"} {...others} />);
}

export default Component;
