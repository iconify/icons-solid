import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/ms9j0qb_b.css';
import '../../css/b/bv198sb1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ms9j0qb_b"/><path class="bv198sb1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:filter-edit"} {...others} />);
}

export default Component;
