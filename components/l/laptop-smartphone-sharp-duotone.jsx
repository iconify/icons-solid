import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hlf9xubcs.css';
import '../../css/z/zojokz93c.css';
import '../../css/z/zoch16lok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="hlf9xubcs"/><path class="zojokz93c"/><path clip-rule="evenodd" class="zoch16lok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:laptop-smartphone-sharp-duotone"} {...others} />);
}

export default Component;
