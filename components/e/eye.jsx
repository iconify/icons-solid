import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xlhb4cbxr.css';
import '../../css/z/zoslq7bwc.css';
import '../../css/f/fd7qipbux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xlhb4cbxr"/><path class="zoslq7bwc"/><path class="fd7qipbux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:eye"} {...others} />);
}

export default Component;
