import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fxgclebbw.css';
import '../../css/l/lkzv1yb4g.css';
import '../../css/o/oy0xlmuhe.css';
import '../../css/h/hagxqrb4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fxgclebbw"/><path class="lkzv1yb4g"/><path class="oy0xlmuhe"/><path class="hagxqrb4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-04"} {...others} />);
}

export default Component;
