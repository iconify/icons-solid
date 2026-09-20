import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sp7n27b5q.css';
import '../../css/q/q5eclkb3c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sp7n27b5q"/><path clip-rule="evenodd" class="q5eclkb3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:social-unsplash-duotone"} {...others} />);
}

export default Component;
