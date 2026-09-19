import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-z7z2qao.css';

const viewBox = {"width":432,"height":384};
const content = `<path class="a-z7z2qao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:camera-mic"} {...others} />);
}

export default Component;
