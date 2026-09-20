import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/clmn0wb6y.css';
import '../../css/s/sphox_b_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="clmn0wb6y"/><path class="sphox_b_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:stopwatch"} {...others} />);
}

export default Component;
