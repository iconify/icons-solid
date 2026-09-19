import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjer4-bfp.css';
import '../../css/y/yn-kc5b0s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rjer4-bfp"/><path class="yn-kc5b0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:fire-filled"} {...others} />);
}

export default Component;
