import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/poh-oo92n.css';
import '../../css/s/s33r7bm-c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="poh-oo92n"/><path class="s33r7bm-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:work-history"} {...others} />);
}

export default Component;
