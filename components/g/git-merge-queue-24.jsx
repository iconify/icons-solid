import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8-ol_24k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w8-ol_24k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:git-merge-queue-24"} {...others} />);
}

export default Component;
