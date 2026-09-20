import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npn7ripfg.css';
import '../../css/f/fonv89syi.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="npn7ripfg"/><path class="fonv89syi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:microphone-old-16"} {...others} />);
}

export default Component;
