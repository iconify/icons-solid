import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zne4v6ybo.css';
import '../../css/a/a8kxa55df.css';
import '../../css/k/kl06x4fao.css';
import '../../css/t/tvozrt40x.css';
import '../../css/e/e55ju2mof.css';
import '../../css/r/rt224ybxu.css';
import '../../css/e/e-ckaob7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zne4v6ybo"/><path class="a8kxa55df"/><path class="kl06x4fao"/><path class="tvozrt40x"/><path class="e55ju2mof"/><path class="rt224ybxu"/><path class="e-ckaob7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bacteria-bold-duotone"} {...others} />);
}

export default Component;
