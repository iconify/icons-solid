import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw6f8ebgz.css';

const viewBox = {"width":384,"height":480};
const content = `<path class="aw6f8ebgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:headset-mic"} {...others} />);
}

export default Component;
