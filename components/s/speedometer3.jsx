import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/b/b6tpc2b7x.css';
import '../../css/t/tmv8u2bgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="b6tpc2b7x"/><path class="tmv8u2bgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:speedometer3"} {...others} />);
}

export default Component;
