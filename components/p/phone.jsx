import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/svw321bbc.css';
import '../../css/g/gs_5-gc9x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="svw321bbc"/><path class="gs_5-gc9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:phone"} {...others} />);
}

export default Component;
