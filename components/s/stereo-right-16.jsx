import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r97kr0boe.css';
import '../../css/w/wzy28rbvo.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="r97kr0boe"/><path clip-rule="evenodd" class="wzy28rbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:stereo-right-16"} {...others} />);
}

export default Component;
