import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lsxekjb5b.css';
import '../../css/k/ky_ijxfrq.css';
import '../../css/q/qkjx0v_3m.css';
import '../../css/p/pfvktcckz.css';
import '../../css/e/eyecnxbec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lsxekjb5b"/><path class="ky_ijxfrq"/><path class="qkjx0v_3m"/><path class="pfvktcckz"/><path class="eyecnxbec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:id-not-verified"} {...others} />);
}

export default Component;
