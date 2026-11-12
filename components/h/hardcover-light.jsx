import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epx4oac-v.css';
import '../../css/k/k4v90z5go.css';
import '../../css/h/hv1gm7eyn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="epx4oac-v"/><path class="k4v90z5go"/><path class="hv1gm7eyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hardcover-light"} {...others} />);
}

export default Component;
