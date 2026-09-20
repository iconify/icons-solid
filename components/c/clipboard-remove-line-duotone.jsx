import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zkn3xyt6c.css';
import '../../css/m/m390b8qby.css';
import '../../css/u/ua9a7bbxy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zkn3xyt6c"/><path class="m390b8qby"/><path class="ua9a7bbxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-remove-line-duotone"} {...others} />);
}

export default Component;
