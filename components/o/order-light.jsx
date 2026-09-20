import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m5m2q5-zc.css';
import '../../css/c/cpglq24vf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="m5m2q5-zc"/><path class="cpglq24vf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:order-light"} {...others} />);
}

export default Component;
