import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kmac4rbla.css';
import '../../css/u/uog4vzbuc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kmac4rbla"/><path class="uog4vzbuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flask-conical-off"} {...others} />);
}

export default Component;
