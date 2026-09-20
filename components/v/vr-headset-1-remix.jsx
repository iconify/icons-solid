import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yawj8c32a.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="yawj8c32a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:vr-headset-1-remix"} {...others} />);
}

export default Component;
