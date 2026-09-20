import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mut1umbgi.css';
import '../../css/p/pt8jm_b_y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mut1umbgi"/><path class="pt8jm_b_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:calendar-o"} {...others} />);
}

export default Component;
