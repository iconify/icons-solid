import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rvl8hqvnj.css';
import '../../css/q/qhb4jfb5g.css';
import '../../css/q/qhtreac6e.css';
import '../../css/r/rf7rbhbsd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="rvl8hqvnj"/><path class="qhb4jfb5g"/><path class="qhtreac6e"/><path class="rf7rbhbsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:stretching"} {...others} />);
}

export default Component;
