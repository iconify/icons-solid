import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9qwmvb5v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q9qwmvb5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:social-vimeo"} {...others} />);
}

export default Component;
