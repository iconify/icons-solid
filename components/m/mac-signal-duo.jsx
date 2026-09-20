import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/municvskz.css';
import '../../css/b/b7gwi6nij.css';
import '../../css/o/on-vkocsb.css';
import '../../css/j/j-0l7bbnq.css';
import '../../css/u/ug866vbia.css';
import '../../css/j/j0yhk6bya.css';
import '../../css/t/t8nk1jbek.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="municvskz"/><path class="b7gwi6nij"/><path class="on-vkocsb"/><path class="j-0l7bbnq"/><path class="ug866vbia"/><path class="j0yhk6bya"/><path class="t8nk1jbek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:mac-signal-duo"} {...others} />);
}

export default Component;
