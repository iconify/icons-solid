import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xd0085bqe.css';
import '../../css/x/xq0l1dbym.css';
import '../../css/e/e5fqixblw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="xd0085bqe"/><rect class="xq0l1dbym"/><path class="e5fqixblw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:computer"} {...others} />);
}

export default Component;
