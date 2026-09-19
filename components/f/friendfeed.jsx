import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq4tbcbmt.css';

const viewBox = {"width":464,"height":480};
const content = `<path class="vq4tbcbmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:friendfeed"} {...others} />);
}

export default Component;
