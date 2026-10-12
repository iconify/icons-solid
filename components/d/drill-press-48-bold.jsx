import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfv_tdfee.css';
import '../../css/e/ebopsbb7e.css';
import '../../css/g/gna13kh2l.css';
import '../../css/t/tcg3wkbmi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hfv_tdfee"/><path class="ebopsbb7e"/><path class="gna13kh2l"/><path class="tcg3wkbmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drill-press-48-bold"} {...others} />);
}

export default Component;
