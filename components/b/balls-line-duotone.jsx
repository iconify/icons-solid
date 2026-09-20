import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ecr67hz-n.css';
import '../../css/b/b84azyabi.css';
import '../../css/w/w__k8yovn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ecr67hz-n"/><path class="b84azyabi"/><path class="w__k8yovn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:balls-line-duotone"} {...others} />);
}

export default Component;
