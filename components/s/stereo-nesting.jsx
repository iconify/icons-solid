import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/o5_elsb4l.css';
import '../../css/p/p-z9cxucp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="o5_elsb4l"/><path class="p-z9cxucp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:stereo-nesting"} {...others} />);
}

export default Component;
