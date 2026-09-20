import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j-1dzrb4k.css';
import '../../css/e/euh_zjblv.css';
import '../../css/b/bgnz63b4e.css';
import '../../css/e/eo3ze_l3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j-1dzrb4k"/><path class="euh_zjblv"/><path class="bgnz63b4e"/><path class="eo3ze_l3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:handicapped"} {...others} />);
}

export default Component;
