import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/j6ia51asj.css';
import '../../css/x/xzlyzjegv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="j6ia51asj"/><path class="xzlyzjegv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:lemon"} {...others} />);
}

export default Component;
