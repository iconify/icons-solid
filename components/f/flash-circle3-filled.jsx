import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/i/in8g8sbna.css';
import '../../css/v/vur7zybmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="in8g8sbna"/><path class="vur7zybmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:flash-circle3-filled"} {...others} />);
}

export default Component;
