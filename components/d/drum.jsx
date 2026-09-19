import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b3wxq_b9b.css';
import '../../css/z/zzc4ijb4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b3wxq_b9b"/><path class="zzc4ijb4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:drum"} {...others} />);
}

export default Component;
