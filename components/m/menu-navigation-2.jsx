import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yt_2d1boo.css';
import '../../css/j/jy9_vg6xa.css';
import '../../css/n/na82uytpv.css';
import '../../css/e/eho0tb_oh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yt_2d1boo"/><path class="jy9_vg6xa"/><path class="na82uytpv"/><path class="eho0tb_oh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:menu-navigation-2"} {...others} />);
}

export default Component;
