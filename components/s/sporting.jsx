import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/g/gnkx5hbtb.css';
import '../../css/s/stjoksb_i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="gnkx5hbtb"/><path class="stjoksb_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sporting"} {...others} />);
}

export default Component;
