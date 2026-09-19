import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2r6-ab1b.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="y2r6-ab1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:mastodon"} {...others} />);
}

export default Component;
