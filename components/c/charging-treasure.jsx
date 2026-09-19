import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jf2qnkbaa.css';
import '../../css/m/mrepuub9y.css';
import '../../css/v/vy_-jtanz.css';
import '../../css/j/j3e_45kih.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jf2qnkbaa"/><rect class="mrepuub9y"/><rect class="vy_-jtanz"/><path class="j3e_45kih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:charging-treasure"} {...others} />);
}

export default Component;
