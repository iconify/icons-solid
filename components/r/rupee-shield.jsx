import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y29n1wndq.css';
import '../../css/s/so95n4gpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y29n1wndq"/><path class="so95n4gpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rupee-shield"} {...others} />);
}

export default Component;
