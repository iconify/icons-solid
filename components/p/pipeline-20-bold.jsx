import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw9dp8bid.css';
import '../../css/k/k8w-7fbni.css';
import '../../css/o/o-hjr9b_g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw9dp8bid"/><path class="k8w-7fbni"/><path class="o-hjr9b_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipeline-20-bold"} {...others} />);
}

export default Component;
