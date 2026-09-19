import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ylpqz2y1r.css';
import '../../css/u/u1t-g0b2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ylpqz2y1r"/><path class="u1t-g0b2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:renewable-energy-01"} {...others} />);
}

export default Component;
