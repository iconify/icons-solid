import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hi9znkb4m.css';
import '../../css/c/cqf00f36x.css';
import '../../css/s/se4ujwtml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hi9znkb4m"/><path class="cqf00f36x"/><path class="se4ujwtml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hand-bag-02"} {...others} />);
}

export default Component;
