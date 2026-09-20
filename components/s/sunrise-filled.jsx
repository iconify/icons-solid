import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ew--fubiw.css';
import '../../css/z/zin8xrbiy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ew--fubiw"/><path class="zin8xrbiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sunrise-filled"} {...others} />);
}

export default Component;
