import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/szxhkdbau.css';
import '../../css/n/n4g3xacqe.css';
import '../../css/r/r2kxiiuoz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="szxhkdbau"/><path class="n4g3xacqe wm-a"/><path class="r2kxiiuoz wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bell-dot-solid"} {...others} />);
}

export default Component;
