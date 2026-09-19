import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/os38r8_ao.css';
import '../../css/f/f_roqrbwn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="os38r8_ao"/><path class="f_roqrbwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:credit-card"} {...others} />);
}

export default Component;
