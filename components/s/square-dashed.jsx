import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/byy6wdbxw.css';
import '../../css/u/uo7v-mbdc.css';
import '../../css/e/e349cfoaw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="byy6wdbxw wm-shadow"/><path class="uo7v-mbdc wm-shadow"/><path class="e349cfoaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:square-dashed"} {...others} />);
}

export default Component;
