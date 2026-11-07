import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o6cb9_bxf.css';
import '../../css/p/p_iupj3wu.css';
import '../../css/h/hvt2a6e9c.css';
import '../../css/c/c2ccr1cfe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="o6cb9_bxf"/><path class="p_iupj3wu"/><path class="hvt2a6e9c"/><path class="c2ccr1cfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:armchair-broken"} {...others} />);
}

export default Component;
