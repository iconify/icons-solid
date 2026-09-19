import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/q/qf6nxob5u.css';
import '../../css/m/m_7q05b5b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="qf6nxob5u"/><path class="m_7q05b5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:icecream-three"} {...others} />);
}

export default Component;
