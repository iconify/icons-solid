import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/sgouetkcw.css';
import '../../css/f/fqgji9b2o.css';
import '../../css/p/plqe-22_l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="sgouetkcw"/><path class="fqgji9b2o"/><path class="plqe-22_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:baby-sling"} {...others} />);
}

export default Component;
