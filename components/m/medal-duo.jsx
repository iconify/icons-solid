import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/t/t85_hibub.css';
import '../../css/h/hg3membki.css';
import '../../css/d/dcswn6nli.css';
import '../../css/w/w8fn3ydyn.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="t85_hibub"/><path class="hg3membki"/><path class="dcswn6nli"/><path class="w8fn3ydyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:medal-duo"} {...others} />);
}

export default Component;
