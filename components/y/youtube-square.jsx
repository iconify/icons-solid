import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a80mw2isl.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="a80mw2isl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:youtube-square"} {...others} />);
}

export default Component;
