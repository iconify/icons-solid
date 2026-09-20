import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eqca_gfdy.css';
import '../../css/b/b_mqzbbbw.css';
import '../../css/h/hkxdjtygn.css';
import '../../css/j/joaj3f0ng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="eqca_gfdy"/><path class="b_mqzbbbw"/><path class="hkxdjtygn"/><path class="joaj3f0ng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-circle-linear"} {...others} />);
}

export default Component;
