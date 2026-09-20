import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w70lsgs8c.css';
import '../../css/v/v-bm5hswa.css';
import '../../css/j/j23xr8ndi.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="w70lsgs8c"><path class="v-bm5hswa"/><path class="j23xr8ndi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:keyboard-arrow-return"} {...others} />);
}

export default Component;
