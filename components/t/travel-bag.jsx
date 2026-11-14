import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/atl062bai.css';
import '../../css/f/f8z74ubhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="atl062bai"/><path class="f8z74ubhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:travel-bag"} {...others} />);
}

export default Component;
