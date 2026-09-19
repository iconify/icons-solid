import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lpx4pgeci.css';
import '../../css/u/u36wmrn8t.css';
import '../../css/k/kf_dizzer.css';
import '../../css/n/n2rflacij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lpx4pgeci"/><path class="u36wmrn8t"/><path class="kf_dizzer"/><path class="n2rflacij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:backpack-02"} {...others} />);
}

export default Component;
