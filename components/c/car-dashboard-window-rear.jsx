import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y07f4d6oh.css';
import '../../css/v/vtce3bqtj.css';
import '../../css/p/p3xxbml3s.css';
import '../../css/g/gvjge2eeq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y07f4d6oh"/><path class="vtce3bqtj"/><path class="p3xxbml3s"/><path class="gvjge2eeq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:car-dashboard-window-rear"} {...others} />);
}

export default Component;
