import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omv4uwkpo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="omv4uwkpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:hight-beam-headlights-line"} {...others} />);
}

export default Component;
