import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/egrr8ib-r.css';
import '../../css/z/zx_ge5blp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="egrr8ib-r"/><path class="zx_ge5blp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lamp-04"} {...others} />);
}

export default Component;
