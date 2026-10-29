import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y543w2xot.css';
import '../../css/f/fcwbjtbjp.css';
import '../../css/u/u4bse819v.css';
import '../../css/o/oy4kjja7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="y543w2xot"/><path class="fcwbjtbjp"/><path class="u4bse819v wm-a"/><path class="oy4kjja7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:puja-thali"} {...others} />);
}

export default Component;
