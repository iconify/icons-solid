import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ij-0d6uhs.css';
import '../../css/j/j_6_mecrt.css';
import '../../css/z/zb5swmrwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ij-0d6uhs"/><path class="j_6_mecrt"/><path class="zb5swmrwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-sparkle"} {...others} />);
}

export default Component;
