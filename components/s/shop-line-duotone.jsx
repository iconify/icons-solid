import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jaz9c-b0o.css';
import '../../css/z/zj2nirlnt.css';
import '../../css/z/zwtdkobff.css';
import '../../css/b/bppk80h1t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jaz9c-b0o"/><path class="zj2nirlnt"/><path class="zwtdkobff"/><path class="bppk80h1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shop-line-duotone"} {...others} />);
}

export default Component;
