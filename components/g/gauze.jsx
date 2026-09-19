import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/uyseoq3ur.css';
import '../../css/x/x6mnf95_s.css';
import '../../css/q/qw1suyb4s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="uyseoq3ur"/><circle class="x6mnf95_s"/><path class="qw1suyb4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:gauze"} {...others} />);
}

export default Component;
