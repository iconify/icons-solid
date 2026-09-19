import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a70ga4nnm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a70ga4nnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:glass-whiskey"} {...others} />);
}

export default Component;
