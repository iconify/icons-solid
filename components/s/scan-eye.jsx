import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k7rysmbfb.css';
import '../../css/o/ot72cwhlb.css';
import '../../css/z/z7n6qibgq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k7rysmbfb"/><circle class="ot72cwhlb"/><path class="z7n6qibgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:scan-eye"} {...others} />);
}

export default Component;
