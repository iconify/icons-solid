import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/glhe58bhw.css';
import '../../css/h/hazht06kc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="glhe58bhw"/><path class="hazht06kc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:l-arrow-right-up"} {...others} />);
}

export default Component;
