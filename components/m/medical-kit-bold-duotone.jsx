import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y3fqx3qzw.css';
import '../../css/n/n1d6mcb2n.css';
import '../../css/e/ew9obfnmq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y3fqx3qzw"/><path class="n1d6mcb2n"/><path clip-rule="evenodd" class="ew9obfnmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medical-kit-bold-duotone"} {...others} />);
}

export default Component;
