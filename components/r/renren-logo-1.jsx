import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/n/nap2kajkk.css';
import '../../css/x/x6953cc8e.css';
import '../../css/p/p1vuc1bjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="nap2kajkk"/><path class="x6953cc8e"/><path class="p1vuc1bjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:renren-logo-1"} {...others} />);
}

export default Component;
