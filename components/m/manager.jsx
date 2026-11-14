import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c-9xcgbvn.css';
import '../../css/k/kq_p2-bpa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c-9xcgbvn"/><path class="kq_p2-bpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:manager"} {...others} />);
}

export default Component;
