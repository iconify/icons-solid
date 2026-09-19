import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jvaagpbda.css';
import '../../css/j/jka2gvemq.css';
import '../../css/y/yf0mo6n6x.css';
import '../../css/f/fj9kktbpx.css';
import '../../css/r/r1qkz4b4t.css';
import '../../css/z/zzezk7bbf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="jvaagpbda"/><path class="jka2gvemq"/><path class="yf0mo6n6x"/><path class="fj9kktbpx"/><path class="r1qkz4b4t"/><path class="zzezk7bbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:recycling"} {...others} />);
}

export default Component;
