import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pvkc1k-jx.css';
import '../../css/g/gg604n2bm.css';
import '../../css/z/za12y0ykl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pvkc1k-jx"/><path class="gg604n2bm"/><path class="za12y0ykl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-delay-02"} {...others} />);
}

export default Component;
