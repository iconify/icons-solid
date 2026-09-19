import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf9hn5q-e.css';

const viewBox = {"width":464,"height":448};
const content = `<path class="cf9hn5q-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:github-alt"} {...others} />);
}

export default Component;
