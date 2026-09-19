import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/tu4qdd9vm.css';
import '../../css/l/lnotn3pcn.css';
import '../../css/r/r-m4ambab.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="tu4qdd9vm"/><path class="lnotn3pcn"/><circle class="r-m4ambab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sleep-two"} {...others} />);
}

export default Component;
