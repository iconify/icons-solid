import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p4-ub4dwy.css';
import '../../css/r/rsqqxe7_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p4-ub4dwy"/><path class="rsqqxe7_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-search-02"} {...others} />);
}

export default Component;
