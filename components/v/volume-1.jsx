import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jgeqrp5ro.css';
import '../../css/n/n6r0d6boy.css';
import '../../css/h/hhwgsyjct.css';
import '../../css/e/et0vgdg-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="jgeqrp5ro wm-shadow"/><path class="n6r0d6boy wm-shadow"/><path class="hhwgsyjct"/><path class="et0vgdg-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:volume-1"} {...others} />);
}

export default Component;
