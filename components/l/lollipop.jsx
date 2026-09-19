import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xrrm97add.css';
import '../../css/q/qnqkujejg.css';
import '../../css/m/mqepsgbiz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="xrrm97add"/><path class="qnqkujejg"/><path class="mqepsgbiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:lollipop"} {...others} />);
}

export default Component;
