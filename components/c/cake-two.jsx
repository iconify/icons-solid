import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/t4lfr94ic.css';
import '../../css/e/es2y4_69g.css';
import '../../css/l/l3a42pa9l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="t4lfr94ic"/><path class="es2y4_69g"/><path class="l3a42pa9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cake-two"} {...others} />);
}

export default Component;
