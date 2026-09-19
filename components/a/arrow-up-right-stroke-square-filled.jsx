import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv-wf9b2n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yv-wf9b2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-up-right-stroke-square-filled"} {...others} />);
}

export default Component;
