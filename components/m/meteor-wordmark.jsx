import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ad7p1c9ad.css';
import '../../css/e/e32x_9b-n.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ad7p1c9ad"/><path class="e32x_9b-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:meteor-wordmark"} {...others} />);
}

export default Component;
