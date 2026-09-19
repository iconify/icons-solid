import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vt_qn5bdz.css';
import '../../css/j/jfzf5xxob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vt_qn5bdz"/><path class="jfzf5xxob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:fridge"} {...others} />);
}

export default Component;
