import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/etcb43btd.css';
import '../../css/x/xe_mok4yw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><path class="etcb43btd"/><path class="xe_mok4yw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:setting-outline"} {...others} />);
}

export default Component;
