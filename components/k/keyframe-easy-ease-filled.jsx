import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5jsh8avv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t5jsh8avv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:keyframe-easy-ease-filled"} {...others} />);
}

export default Component;
