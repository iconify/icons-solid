import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rjr2ofjtq.css';
import '../../css/p/p8fx5dp2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rjr2ofjtq"/><path class="p8fx5dp2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rocking-chair"} {...others} />);
}

export default Component;
