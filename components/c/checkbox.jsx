import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf3z-bcyp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kf3z-bcyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:checkbox"} {...others} />);
}

export default Component;
