import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sxe59obrt.css';
import '../../css/p/pfx0pc0eq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sxe59obrt"/><path class="pfx0pc0eq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:taxes"} {...others} />);
}

export default Component;
