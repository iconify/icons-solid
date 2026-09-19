import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/uw89-tbxn.css';
import '../../css/a/a_r8tk11v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="uw89-tbxn"/><path class="a_r8tk11v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:taurus"} {...others} />);
}

export default Component;
