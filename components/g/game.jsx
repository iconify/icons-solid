import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eg5c0zlrg.css';
import '../../css/z/z98zelieh.css';
import '../../css/o/o0oa21b-d.css';
import '../../css/y/yvz9y3b2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="eg5c0zlrg"/><path class="z98zelieh"/><path class="o0oa21b-d"/><path class="yvz9y3b2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:game"} {...others} />);
}

export default Component;
