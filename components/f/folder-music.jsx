import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0x4dfbdc.css';
import '../../css/v/vtmj6lb1b.css';
import '../../css/l/lm11c834f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c0x4dfbdc"/><path class="vtmj6lb1b"/><path class="lm11c834f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-music"} {...others} />);
}

export default Component;
