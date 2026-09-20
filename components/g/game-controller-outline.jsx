import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4j-kd0fo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c4j-kd0fo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:game-controller-outline"} {...others} />);
}

export default Component;
