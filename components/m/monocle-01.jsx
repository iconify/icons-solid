import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bsc_-kbyb.css';
import '../../css/e/ec1r3sx7z.css';
import '../../css/l/ldv_q5b1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bsc_-kbyb"/><path class="ec1r3sx7z"/><path class="ldv_q5b1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:monocle-01"} {...others} />);
}

export default Component;
