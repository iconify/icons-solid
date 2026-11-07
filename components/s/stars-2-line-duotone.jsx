import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/js51jobae.css';
import '../../css/a/a9gwd44ju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="js51jobae"/><path class="a9gwd44ju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-2-line-duotone"} {...others} />);
}

export default Component;
