import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bhy-axcbm.css';
import '../../css/u/uo5gp5bll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bhy-axcbm"/><path class="uo5gp5bll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:circle-bottom-up-line-duotone"} {...others} />);
}

export default Component;
