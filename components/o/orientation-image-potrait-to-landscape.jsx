import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/obh8punla.css';
import '../../css/j/jon9p6f8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="obh8punla"/><path class="jon9p6f8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:orientation-image-potrait-to-landscape"} {...others} />);
}

export default Component;
