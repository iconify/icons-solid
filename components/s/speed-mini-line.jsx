import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5dqrrb6x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w5dqrrb6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:speed-mini-line"} {...others} />);
}

export default Component;
