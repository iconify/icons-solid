import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apbnsr93k.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="apbnsr93k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:preset-a"} {...others} />);
}

export default Component;
