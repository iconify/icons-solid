import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/i/ifroi7b3s.css';
import '../../css/l/llfe_abfd.css';
import '../../css/u/utsg_1-6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="ifroi7b3s"/><path class="llfe_abfd"/><path class="utsg_1-6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:buildings2"} {...others} />);
}

export default Component;
