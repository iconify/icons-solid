import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e5opmsb2q.css';
import '../../css/k/k5cl12b0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e5opmsb2q"/><path class="k5cl12b0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bell-dot"} {...others} />);
}

export default Component;
