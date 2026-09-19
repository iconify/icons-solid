import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/crqzezbkc.css';
import '../../css/p/p9rx95bqb.css';
import '../../css/c/cp1palbkb.css';
import '../../css/e/e6kad7bsr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="crqzezbkc"/><path class="p9rx95bqb"/><path class="cp1palbkb"/><path class="e6kad7bsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:medical-box"} {...others} />);
}

export default Component;
