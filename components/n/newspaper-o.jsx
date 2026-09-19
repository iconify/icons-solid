import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j55fwyb9u.css';

const viewBox = {"width":2048,"height":1408};
const content = `<path class="j55fwyb9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:newspaper-o"} {...others} />);
}

export default Component;
