import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nqjaw7bei.css';
import '../../css/e/e_yxgpbxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nqjaw7bei"/><path class="e_yxgpbxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tap-05"} {...others} />);
}

export default Component;
