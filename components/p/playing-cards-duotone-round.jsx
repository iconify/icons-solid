import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/holj0hbyy.css';
import '../../css/b/bmvf06bct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="holj0hbyy"/><path class="bmvf06bct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:playing-cards-duotone-round"} {...others} />);
}

export default Component;
