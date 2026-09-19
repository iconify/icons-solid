import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ol18-e58x.css';
import '../../css/p/p1ojkli4s.css';
import '../../css/s/s5aydff-s.css';
import '../../css/w/wj6g0ubdg.css';
import '../../css/f/f9aoq4i-d.css';
import '../../css/b/bb6ojk4-u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ol18-e58x"/><path class="p1ojkli4s"/><ellipse transform="rotate(45 32.535 15.435)" class="s5aydff-s"/><circle transform="rotate(45 30.06 11.398)" class="wj6g0ubdg"/><circle transform="rotate(45 37.132 18.47)" class="f9aoq4i-d"/><circle transform="rotate(45 31.475 17.055)" class="bb6ojk4-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:drumstick"} {...others} />);
}

export default Component;
