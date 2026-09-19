import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu3wmc3lc.css';
import '../../css/k/k6ez9jbqr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zu3wmc3lc"/><path class="k6ez9jbqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-notifications"} {...others} />);
}

export default Component;
