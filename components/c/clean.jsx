import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lhzk0on9c.css';
import '../../css/b/b544j2l2n.css';
import '../../css/l/lkva_fbsk.css';
import '../../css/i/icsnh8bsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lhzk0on9c"/><path class="b544j2l2n"/><path class="lkva_fbsk"/><path class="icsnh8bsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clean"} {...others} />);
}

export default Component;
