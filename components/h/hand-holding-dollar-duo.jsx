import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4qy1kbsn.css';
import '../../css/w/wu955sa-e.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="k4qy1kbsn"/><path class="wu955sa-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hand-holding-dollar-duo"} {...others} />);
}

export default Component;
