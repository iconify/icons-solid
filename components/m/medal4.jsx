import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zi_u8flpp.css';
import '../../css/w/wdeubdkmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zi_u8flpp"/><path class="wdeubdkmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:medal4"} {...others} />);
}

export default Component;
