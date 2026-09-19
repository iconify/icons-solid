import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mokpvmbch.css';
import '../../css/k/ki6jfibdu.css';
import '../../css/k/kt8eunb4u.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mokpvmbch"/><path class="ki6jfibdu"/><path class="kt8eunb4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:campfire-bold"} {...others} />);
}

export default Component;
