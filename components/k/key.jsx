import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yg19ojb2y.css';
import '../../css/u/udesl-8lq.css';
import '../../css/k/kccmp_b5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yg19ojb2y"/><path class="udesl-8lq"/><path class="kccmp_b5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:key"} {...others} />);
}

export default Component;
