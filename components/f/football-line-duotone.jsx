import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w4b2-ebns.css';
import '../../css/e/ev0s3udxe.css';
import '../../css/a/a5bhuku2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="w4b2-ebns"/><path class="ev0s3udxe"/><path class="a5bhuku2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:football-line-duotone"} {...others} />);
}

export default Component;
