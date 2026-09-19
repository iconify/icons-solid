import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xoy6yv3cj.css';
import '../../css/y/yef4huqia.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xoy6yv3cj"/><path class="yef4huqia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blackfolder"} {...others} />);
}

export default Component;
