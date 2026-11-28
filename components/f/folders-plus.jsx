import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_v4fzbyn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_v4fzbyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:folders-plus"} {...others} />);
}

export default Component;
