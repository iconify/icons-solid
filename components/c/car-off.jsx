import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yzb6oqvjq.css';
import '../../css/k/kctztfb0y.css';
import '../../css/c/c44meob9i.css';
import '../../css/n/n8y_y0mgs.css';
import '../../css/r/rpgpq3b7h.css';
import '../../css/e/eo_76b8fd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yzb6oqvjq"/><path class="kctztfb0y"/><path class="c44meob9i"/><path class="n8y_y0mgs"/><path class="rpgpq3b7h"/><path class="eo_76b8fd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:car-off"} {...others} />);
}

export default Component;
