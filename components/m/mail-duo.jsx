import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/f/fed-fnbdm.css';
import '../../css/c/cc09lccbi.css';
import '../../css/p/pbguh7b8b.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="fed-fnbdm"/><path class="cc09lccbi"/><path class="pbguh7b8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:mail-duo"} {...others} />);
}

export default Component;
