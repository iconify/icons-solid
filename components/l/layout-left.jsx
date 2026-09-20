import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujy0nqbnn.css';
import '../../css/w/w-qnm6kow.css';
import '../../css/h/hwk6tbczd.css';
import '../../css/b/btbnu2b8g.css';
import '../../css/p/pj1vf0rgd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ujy0nqbnn"/><path class="w-qnm6kow"/><path class="hwk6tbczd"/><path class="btbnu2b8g"/><path class="pj1vf0rgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:layout-left"} {...others} />);
}

export default Component;
