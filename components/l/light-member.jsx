import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l4o2qpb4m.css';
import '../../css/t/tqg4a-7db.css';
import '../../css/q/qkenzxbrz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="l4o2qpb4m"/><path class="tqg4a-7db"/><path class="qkenzxbrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:light-member"} {...others} />);
}

export default Component;
