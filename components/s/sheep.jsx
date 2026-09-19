import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kwg6j3_ui.css';
import '../../css/h/h5y82zm2b.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="kwg6j3_ui"/><path class="h5y82zm2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:sheep"} {...others} />);
}

export default Component;
