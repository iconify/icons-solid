import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/o/o_-ocsn5i.css';
import '../../css/t/tlktmtbnx.css';
import '../../css/v/vm5l4wnay.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="o_-ocsn5i"/><path class="tlktmtbnx"/><circle class="vm5l4wnay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:assembly-line"} {...others} />);
}

export default Component;
