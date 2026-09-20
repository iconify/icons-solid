import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jk7q_7_zl.css';
import '../../css/n/naf-65baz.css';
import '../../css/u/upt2i_ovk.css';
import '../../css/c/cwsij8mcs.css';
import '../../css/p/pe2mnsbch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jk7q_7_zl"/><path class="naf-65baz"/><path class="upt2i_ovk"/><path class="cwsij8mcs"/><path class="pe2mnsbch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ssd-square-broken"} {...others} />);
}

export default Component;
