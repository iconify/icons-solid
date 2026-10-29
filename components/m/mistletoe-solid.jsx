import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zfvmbnb4o.css';
import '../../css/b/bar9-vk_c.css';
import '../../css/m/m-sdp78df.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="zfvmbnb4o"/><path class="bar9-vk_c wm-a"/><path class="m-sdp78df wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mistletoe-solid"} {...others} />);
}

export default Component;
