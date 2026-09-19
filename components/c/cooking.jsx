import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/puu5ycbjz.css';
import '../../css/d/dujv7kbvf.css';
import '../../css/e/eytnxnxck.css';
import '../../css/c/contxzbor.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="puu5ycbjz"/><path class="dujv7kbvf"/><path class="eytnxnxck"/><path class="contxzbor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cooking"} {...others} />);
}

export default Component;
