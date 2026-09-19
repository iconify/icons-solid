import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/oi2kebc7w.css';
import '../../css/k/k4we2zbqk.css';
import '../../css/p/pivmfkj7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="oi2kebc7w"/><path class="k4we2zbqk"/><path class="pivmfkj7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:swords"} {...others} />);
}

export default Component;
