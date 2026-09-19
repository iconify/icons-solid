import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k93ultqjc.css';
import '../../css/b/bj07x890n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k93ultqjc"/><path class="bj07x890n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:security-warning"} {...others} />);
}

export default Component;
