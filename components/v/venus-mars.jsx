import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyg7nbc4l.css';

const viewBox = {"width":2048,"height":1792};
const content = `<path class="wyg7nbc4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:venus-mars"} {...others} />);
}

export default Component;
