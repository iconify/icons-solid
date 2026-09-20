import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w70lsgs8c.css';
import '../../css/f/fsebmeb8b.css';
import '../../css/w/wj8gm1b8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="w70lsgs8c"><path class="fsebmeb8b"/><path class="wj8gm1b8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:saving-bear-market"} {...others} />);
}

export default Component;
