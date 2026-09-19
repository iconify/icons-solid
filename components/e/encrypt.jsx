import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/plu5itbcm.css';
import '../../css/p/pt0xyebsm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="plu5itbcm"/><path class="pt0xyebsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:encrypt"} {...others} />);
}

export default Component;
