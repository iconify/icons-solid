import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/uvh5rrbvb.css';
import '../../css/c/cqdgwh-af.css';
import '../../css/s/sjya5bbyx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="uvh5rrbvb"/><path class="cqdgwh-af"/><path class="sjya5bbyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:mouse-one"} {...others} />);
}

export default Component;
