import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s53vmbcgz.css';
import '../../css/m/m1yihhu0h.css';
import '../../css/r/repkyhzkx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s53vmbcgz"><path class="m1yihhu0h"/><path class="repkyhzkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:youtube"} {...others} />);
}

export default Component;
