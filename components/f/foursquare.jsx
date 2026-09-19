import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzck6r5dg.css';

const viewBox = {"width":368,"height":512};
const content = `<path class="bzck6r5dg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:foursquare"} {...others} />);
}

export default Component;
