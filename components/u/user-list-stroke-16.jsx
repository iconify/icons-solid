import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/o6yel_k4d.css';
import '../../css/a/a5femrbwv.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><circle class="o6yel_k4d"/><path class="a5femrbwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:user-list-stroke-16"} {...others} />);
}

export default Component;
