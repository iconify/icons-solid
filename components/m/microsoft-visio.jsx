import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yikjj-8fy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yikjj-8fy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:microsoft-visio"} {...others} />);
}

export default Component;
