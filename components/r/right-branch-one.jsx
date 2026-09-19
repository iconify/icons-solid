import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/r/rzfb99nxx.css';
import '../../css/y/yxmj3fb4o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="rzfb99nxx"/><path class="yxmj3fb4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:right-branch-one"} {...others} />);
}

export default Component;
