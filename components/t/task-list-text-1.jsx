import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rd02rgc7x.css';
import '../../css/h/h_prov27d.css';
import '../../css/f/fvdo13-2z.css';
import '../../css/d/d9138qwpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rd02rgc7x"/><path class="h_prov27d"/><path class="fvdo13-2z"/><path class="d9138qwpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:task-list-text-1"} {...others} />);
}

export default Component;
