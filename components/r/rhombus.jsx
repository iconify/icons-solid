import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pm4cq-j3o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pm4cq-j3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:rhombus"} {...others} />);
}

export default Component;
