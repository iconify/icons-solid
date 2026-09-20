import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ahf0ofwga.css';
import '../../css/d/dp5ljuulf.css';
import '../../css/o/oge3aw2cm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ahf0ofwga"/><path class="dp5ljuulf"/><path class="oge3aw2cm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-case-charge-bold-duotone"} {...others} />);
}

export default Component;
