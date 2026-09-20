import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vq2m395fl.css';
import '../../css/q/qdciwdadn.css';
import '../../css/q/qd1u16mtd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vq2m395fl"/><path class="qdciwdadn"/><path class="qd1u16mtd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:database-filled"} {...others} />);
}

export default Component;
