import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qww11omoa.css';
import '../../css/m/mhvhrv90s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qww11omoa"/><path class="mhvhrv90s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:circle-dot"} {...others} />);
}

export default Component;
