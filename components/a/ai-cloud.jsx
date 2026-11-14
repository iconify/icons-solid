import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ik-6j00zt.css';
import '../../css/z/z8zvko0_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ik-6j00zt"/><path class="z8zvko0_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-cloud"} {...others} />);
}

export default Component;
