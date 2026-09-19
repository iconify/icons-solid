import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nl9rckbyt.css';
import '../../css/o/o8i-u-sij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nl9rckbyt"/><path class="o8i-u-sij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:heart-check"} {...others} />);
}

export default Component;
