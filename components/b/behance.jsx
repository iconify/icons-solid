import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0-l-ecya.css';

const viewBox = {"width":2048,"height":1344};
const content = `<path class="f0-l-ecya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:behance"} {...others} />);
}

export default Component;
