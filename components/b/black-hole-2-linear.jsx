import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/z/zrj-ydbtw.css';
import '../../css/c/czs7l_bmv.css';
import '../../css/v/v1_lrac2j.css';
import '../../css/e/enk22w7ww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="h_tsn8bxt"/><path class="zrj-ydbtw"/><path class="czs7l_bmv"/><path class="v1_lrac2j"/><path class="enk22w7ww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:black-hole-2-linear"} {...others} />);
}

export default Component;
