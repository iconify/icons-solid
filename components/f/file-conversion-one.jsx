import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/bnfkuob9z.css';
import '../../css/x/xl876boej.css';
import '../../css/o/ogngkrbxk.css';
import '../../css/s/smxvi3bpq.css';
import '../../css/z/zz6tqgbve.css';
import '../../css/l/lxqch5bjp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="bnfkuob9z"/><path class="xl876boej"/><path class="ogngkrbxk"/><path class="smxvi3bpq"/><path class="zz6tqgbve"/><path class="lxqch5bjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-conversion-one"} {...others} />);
}

export default Component;
