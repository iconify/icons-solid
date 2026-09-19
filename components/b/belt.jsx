import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/z0enmib8p.css';
import '../../css/j/jnwib7m2m.css';
import '../../css/x/xuqsw3b3i.css';
import '../../css/i/inteb3brs.css';
import '../../css/b/bfferjx6q.css';
import '../../css/t/t-y274ctk.css';
import '../../css/d/d0q9vz2vj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="z0enmib8p"/><path class="jnwib7m2m"/><path class="xuqsw3b3i"/><path class="inteb3brs"/><path class="bfferjx6q"/><path class="t-y274ctk"/><path class="d0q9vz2vj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:belt"} {...others} />);
}

export default Component;
