import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/aw60xcbpb.css';
import '../../css/x/x8p7rvb4g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="aw60xcbpb"/><path class="x8p7rvb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sport"} {...others} />);
}

export default Component;
