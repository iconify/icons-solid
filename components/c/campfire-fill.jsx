import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp0j7gbhl.css';
import '../../css/c/cmyso5bjt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lp0j7gbhl"/><path class="cmyso5bjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:campfire-fill"} {...others} />);
}

export default Component;
