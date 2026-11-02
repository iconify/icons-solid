import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmieo0byo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cmieo0byo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:hight-beam-headlights-fill"} {...others} />);
}

export default Component;
