import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gowqhvezy.css';
import '../../css/l/l0ju07zxe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gowqhvezy"/><path class="l0ju07zxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:checkmark-starburst"} {...others} />);
}

export default Component;
