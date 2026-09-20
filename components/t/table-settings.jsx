import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ape36fnyv.css';
import '../../css/x/xlr8dz81c.css';
import '../../css/h/h1_u2g9co.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ape36fnyv"/><path class="xlr8dz81c"/><circle class="h1_u2g9co"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:table-settings"} {...others} />);
}

export default Component;
