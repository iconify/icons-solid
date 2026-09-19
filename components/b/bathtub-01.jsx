import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e_u4rsbeh.css';
import '../../css/l/lnhu51bbs.css';
import '../../css/z/z6t8ydbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e_u4rsbeh"/><path class="lnhu51bbs"/><path class="z6t8ydbzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bathtub-01"} {...others} />);
}

export default Component;
