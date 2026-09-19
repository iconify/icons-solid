import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/npzbi206w.css';
import '../../css/r/r57mz8oti.css';
import '../../css/r/riam8ubfn.css';
import '../../css/q/qar-z4unx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="npzbi206w"/><path class="r57mz8oti"/><path class="riam8ubfn"/><path class="qar-z4unx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:scooter-03"} {...others} />);
}

export default Component;
