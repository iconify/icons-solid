import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qi-k8fb9u.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="qi-k8fb9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:star-and-crescent"} {...others} />);
}

export default Component;
