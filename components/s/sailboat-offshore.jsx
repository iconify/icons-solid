import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1n-pskbt.css';
import '../../css/y/yov2mac9k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y1n-pskbt"/><path class="yov2mac9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:sailboat-offshore"} {...others} />);
}

export default Component;
