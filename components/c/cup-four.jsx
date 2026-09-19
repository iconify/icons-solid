import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x7kg8h_zw.css';
import '../../css/n/n8-wmkb7l.css';
import '../../css/m/m2f-d5k6j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="x7kg8h_zw"/><path class="n8-wmkb7l"/><path class="m2f-d5k6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cup-four"} {...others} />);
}

export default Component;
