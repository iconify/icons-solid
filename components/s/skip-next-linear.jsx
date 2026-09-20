import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mahk1zavh.css';
import '../../css/b/bgzsvobwl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mahk1zavh"/><path class="bgzsvobwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skip-next-linear"} {...others} />);
}

export default Component;
