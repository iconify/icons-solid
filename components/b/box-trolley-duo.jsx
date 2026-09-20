import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zigw0qw9c.css';
import '../../css/y/yx4mfjblt.css';
import '../../css/z/z_4w61bag.css';
import '../../css/r/rzrcy-izs.css';
import '../../css/g/gi3ch3ump.css';
import '../../css/m/moaes4bmr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zigw0qw9c"/><path class="yx4mfjblt"/><path class="z_4w61bag"/><path class="rzrcy-izs"/><path class="gi3ch3ump"/><path class="moaes4bmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:box-trolley-duo"} {...others} />);
}

export default Component;
