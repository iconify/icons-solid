import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xb57b_8sc.css';
import '../../css/z/za6gjuszu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xb57b_8sc"/><path class="za6gjuszu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:milk-oat"} {...others} />);
}

export default Component;
