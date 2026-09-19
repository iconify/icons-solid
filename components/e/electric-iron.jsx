import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bw4wgduwd.css';
import '../../css/j/j189wtlhc.css';
import '../../css/f/flza1qbgb.css';
import '../../css/g/g2_t03b5a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="bw4wgduwd"/><circle class="j189wtlhc"/><path class="flza1qbgb"/><path class="g2_t03b5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:electric-iron"} {...others} />);
}

export default Component;
