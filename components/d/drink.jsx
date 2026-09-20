import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mi9gqvjwc.css';
import '../../css/o/ohm0zoruo.css';
import '../../css/m/ma09lhbyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mi9gqvjwc"/><path class="ohm0zoruo"/><path class="ma09lhbyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:drink"} {...others} />);
}

export default Component;
