import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/os38r8_ao.css';
import '../../css/m/mvvl4-bct.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="os38r8_ao"/><path class="mvvl4-bct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:mail"} {...others} />);
}

export default Component;
