import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kah3_b10j.css';
import '../../css/u/ursec-40v.css';
import '../../css/s/sc4xlcbaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="kah3_b10j"/><path class="ursec-40v"/><path class="sc4xlcbaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:spider-man"} {...others} />);
}

export default Component;
