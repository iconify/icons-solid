import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/co1jphb4p.css';
import '../../css/n/nd2nnhb9z.css';
import '../../css/d/d-bufxb7a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path clip-rule="evenodd" class="co1jphb4p"/><path class="nd2nnhb9z"/><path class="d-bufxb7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:neural"} {...others} />);
}

export default Component;
