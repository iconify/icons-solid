import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s9ogv7bti.css';
import '../../css/x/xvbzxc5iy.css';
import '../../css/s/saxyzhbxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s9ogv7bti"/><path clip-rule="evenodd" class="xvbzxc5iy"/><path clip-rule="evenodd" class="saxyzhbxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:contraceptive-patch-outline-24px"} {...others} />);
}

export default Component;
