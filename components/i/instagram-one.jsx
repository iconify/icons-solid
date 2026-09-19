import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/aoabsmt9b.css';
import '../../css/c/cjjtizl0b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="aoabsmt9b"/><path class="cjjtizl0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:instagram-one"} {...others} />);
}

export default Component;
