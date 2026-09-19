import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pop1r84gz.css';
import '../../css/s/sk_90x-pv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pop1r84gz"/><path class="sk_90x-pv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-attachment"} {...others} />);
}

export default Component;
