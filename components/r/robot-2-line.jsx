import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxz--3bgx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hxz--3bgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:robot-2-line"} {...others} />);
}

export default Component;
