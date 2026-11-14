import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wwgenphdo.css';
import '../../css/k/kx3xj_byv.css';
import '../../css/p/pzqwhpb0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wwgenphdo"/><path class="kx3xj_byv"/><path class="pzqwhpb0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-phone-01"} {...others} />);
}

export default Component;
