import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mc32pjbph.css';
import '../../css/z/zkpc82b5u.css';
import '../../css/l/lydko3b2l.css';
import '../../css/y/y8_0k5btu.css';
import '../../css/f/f1-xatr0d.css';
import '../../css/c/cjfgf6b3b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="mc32pjbph"/><path class="zkpc82b5u"/><path class="lydko3b2l"/><path class="y8_0k5btu"/><path class="f1-xatr0d"/><path class="cjfgf6b3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clothes-sweater"} {...others} />);
}

export default Component;
