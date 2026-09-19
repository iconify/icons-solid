import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dn5ynfb2y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dn5ynfb2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:cheese"} {...others} />);
}

export default Component;
