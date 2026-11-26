import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-npdpb0r.css';
import '../../css/a/a2qsx5b4i.css';
import '../../css/b/bevv9x6yt.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="j-npdpb0r"><path class="a2qsx5b4i"/><path class="bevv9x6yt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:hundred-points"} {...others} />);
}

export default Component;
