import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iyh26i1-m.css';
import '../../css/y/y7wqo0bjz.css';
import '../../css/y/y7ce83b9a.css';
import '../../css/a/ac1l4pbcd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="iyh26i1-m"/><path class="y7wqo0bjz"/><path class="y7ce83b9a"/><path class="ac1l4pbcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-rotate-angle-line-duotone"} {...others} />);
}

export default Component;
