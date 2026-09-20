import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whbg-hbik.css';
import '../../css/w/w9x_gek7s.css';
import '../../css/o/o72pp2-qd.css';
import '../../css/e/ett-jt06j.css';
import '../../css/z/znrz8eb7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="whbg-hbik"/><path class="w9x_gek7s"/><path class="o72pp2-qd"/><path class="ett-jt06j"/><path class="znrz8eb7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:temperature-celsius"} {...others} />);
}

export default Component;
