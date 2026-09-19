import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xdqh4gbub.css';
import '../../css/g/g-a3yvbzf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="xdqh4gbub"/><path class="g-a3yvbzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:ipad"} {...others} />);
}

export default Component;
