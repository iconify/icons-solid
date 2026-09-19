import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4oogcjvx.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="w4oogcjvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:youtube-square"} {...others} />);
}

export default Component;
