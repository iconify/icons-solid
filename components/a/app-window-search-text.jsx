import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lcwbrcb_w.css';
import '../../css/d/d4p6j8cys.css';
import '../../css/h/hxwuq2bub.css';
import '../../css/f/fyxiijbhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lcwbrcb_w"/><path class="d4p6j8cys"/><path class="hxwuq2bub"/><path class="fyxiijbhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:app-window-search-text"} {...others} />);
}

export default Component;
