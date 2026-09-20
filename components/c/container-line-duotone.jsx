import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zem31bbhr.css';
import '../../css/u/uceiz7brp.css';
import '../../css/c/cuez0r58z.css';
import '../../css/y/ypgfjgbdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zem31bbhr"/><path class="uceiz7brp"/><path class="cuez0r58z"/><path class="ypgfjgbdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:container-line-duotone"} {...others} />);
}

export default Component;
