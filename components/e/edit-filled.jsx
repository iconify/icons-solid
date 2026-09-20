import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2l72ybha.css';
import '../../css/s/sjk59644y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n2l72ybha"/><path class="sjk59644y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:edit-filled"} {...others} />);
}

export default Component;
