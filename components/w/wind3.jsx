import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/s/sdqiu5bsc.css';
import '../../css/x/xvs57gbtl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="sdqiu5bsc"/><path class="xvs57gbtl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wind3"} {...others} />);
}

export default Component;
