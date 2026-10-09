import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyb_tsrjh.css';
import '../../css/k/k8mwnmlmr.css';
import '../../css/b/bxpdewbnx.css';
import '../../css/x/x2g6pju7v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cyb_tsrjh"/><path class="k8mwnmlmr"/><path class="bxpdewbnx"/><path class="x2g6pju7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:treehouse-20"} {...others} />);
}

export default Component;
