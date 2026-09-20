import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6ltp7bii.css';
import '../../css/j/jug1albzi.css';
import '../../css/y/yo1mv0bwb.css';
import '../../css/l/lyaobbb2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w6ltp7bii"/><path class="jug1albzi"/><path class="yo1mv0bwb"/><path class="lyaobbb2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:tag-dollar"} {...others} />);
}

export default Component;
