import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/pxab4rbwi.css';
import '../../css/s/s1dm0hsyw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="pxab4rbwi"/><path class="s1dm0hsyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:iwatch-one"} {...others} />);
}

export default Component;
