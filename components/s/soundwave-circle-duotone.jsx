import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjswvlb7j.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/z/zk89pre7d.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGuKBfghHD" class="qjswvlb7j"/></defs><g class="cuyn6tgcc"><g class="mc2zb0bvp"><path clip-rule="evenodd" class="zk89pre7d"/><use href="#SVGuKBfghHD"/></g><use href="#SVGuKBfghHD"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:soundwave-circle-duotone"} {...others} />);
}

export default Component;
