import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jju44hr4p.css';
import '../../css/n/n2sextrqm.css';
import '../../css/w/wsnze-bbi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="jju44hr4p"/><path class="n2sextrqm"/><path class="wsnze-bbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:map-distance"} {...others} />);
}

export default Component;
