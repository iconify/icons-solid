import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3beakb9w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3beakb9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:keyframe-hold-ease-out"} {...others} />);
}

export default Component;
