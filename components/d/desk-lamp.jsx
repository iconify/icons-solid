import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/o/oe937sb4k.css';
import '../../css/m/m4655yvtx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="oe937sb4k"/><path class="m4655yvtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:desk-lamp"} {...others} />);
}

export default Component;
