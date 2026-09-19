import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g-wn840fw.css';
import '../../css/a/aew_18b1v.css';
import '../../css/p/pk8yrhbxx.css';
import '../../css/i/ikivgjezg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="g-wn840fw"/><circle class="aew_18b1v"/><circle class="pk8yrhbxx"/><path class="ikivgjezg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:trolley-02"} {...others} />);
}

export default Component;
