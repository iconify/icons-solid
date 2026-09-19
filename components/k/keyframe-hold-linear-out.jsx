import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q64m484xj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q64m484xj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:keyframe-hold-linear-out"} {...others} />);
}

export default Component;
