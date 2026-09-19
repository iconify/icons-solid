import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pr__sggoa.css';
import '../../css/g/gzdw0ebuw.css';
import '../../css/s/ss6jc7vij.css';
import '../../css/g/gwrvddb1c.css';
import '../../css/q/qxwd_tu9m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="pr__sggoa"/><path clip-rule="evenodd" class="gzdw0ebuw"/><path clip-rule="evenodd" class="ss6jc7vij"/><path class="gwrvddb1c"/><path clip-rule="evenodd" class="qxwd_tu9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:qingniao-clue"} {...others} />);
}

export default Component;
