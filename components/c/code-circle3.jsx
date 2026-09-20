import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/t/t3baomb4y.css';
import '../../css/m/muk_r6bbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="t3baomb4y"/><path class="muk_r6bbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:code-circle3"} {...others} />);
}

export default Component;
