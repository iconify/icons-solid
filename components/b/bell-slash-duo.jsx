import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y1v0o7p4n.css';
import '../../css/s/s6n-b1uit.css';
import '../../css/y/ysgw9dbgp.css';
import '../../css/q/qu8h5d4df.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="y1v0o7p4n"/><path class="s6n-b1uit"/><path class="ysgw9dbgp"/><path class="qu8h5d4df"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bell-slash-duo"} {...others} />);
}

export default Component;
