import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pptts5n7v.css';
import '../../css/c/cqkh9kfgu.css';
import '../../css/l/l5026cbjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pptts5n7v"/><path class="cqkh9kfgu"/><path class="l5026cbjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wireless-charge-bold-duotone"} {...others} />);
}

export default Component;
