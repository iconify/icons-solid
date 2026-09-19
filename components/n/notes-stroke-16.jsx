import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/uozyn4b3h.css';
import '../../css/v/v5sovhbmt.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><path class="uozyn4b3h"/><path class="v5sovhbmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:notes-stroke-16"} {...others} />);
}

export default Component;
