import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0mq3zi8m.css';
import '../../css/j/jvh2qfzit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f0mq3zi8m"/><path class="jvh2qfzit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:handheld-alt"} {...others} />);
}

export default Component;
