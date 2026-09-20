import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6p6n_5ao.css';
import '../../css/p/p38rt280q.css';
import '../../css/s/s_otqxiqv.css';
import '../../css/i/ixn0rmu0k.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/mmol2qgwz.css';
import '../../css/l/ljdtxlt7i.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e6p6n_5ao"/><path class="p38rt280q"/><path class="s_otqxiqv"/><path class="ixn0rmu0k"/><g class="jn8qy4bru"><path class="mmol2qgwz"/><path class="ljdtxlt7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:meteor"} {...others} />);
}

export default Component;
