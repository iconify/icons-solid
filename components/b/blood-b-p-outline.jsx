import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p0hgbgb9d.css';
import '../../css/e/eumqw-b2u.css';
import '../../css/w/w5nl8xbex.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p0hgbgb9d"/><path class="eumqw-b2u"/><path clip-rule="evenodd" class="w5nl8xbex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-b-p-outline"} {...others} />);
}

export default Component;
