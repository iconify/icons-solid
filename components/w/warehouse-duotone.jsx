import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cawk1qbvu.css';
import '../../css/t/txgmwub9o.css';
import '../../css/n/nhj7l2yrj.css';
import '../../css/y/yn5_00ilj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cawk1qbvu"/><path class="txgmwub9o"/><path class="nhj7l2yrj"/><path class="yn5_00ilj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:warehouse-duotone"} {...others} />);
}

export default Component;
