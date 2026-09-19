import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lyjx8o0yy.css';
import '../../css/g/ge282zboa.css';
import '../../css/a/ai13k44wk.css';
import '../../css/i/i1imx_8qa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lyjx8o0yy"/><path class="ge282zboa"/><path class="ai13k44wk"/><path class="i1imx_8qa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:kidneys"} {...others} />);
}

export default Component;
