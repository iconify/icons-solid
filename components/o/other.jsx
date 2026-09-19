import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/g/gpnu9-fqh.css';
import '../../css/i/im606fb2m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="gpnu9-fqh"/><path class="im606fb2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:other"} {...others} />);
}

export default Component;
