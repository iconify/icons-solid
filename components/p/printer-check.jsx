import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jmn1ypb6h.css';
import '../../css/s/s662yzbls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jmn1ypb6h"/><path class="s662yzbls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:printer-check"} {...others} />);
}

export default Component;
