import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xry8s8b7z.css';
import '../../css/b/bk_stiw0p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xry8s8b7z"/><path class="bk_stiw0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hand-grab"} {...others} />);
}

export default Component;
