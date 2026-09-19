import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tummrfb8r.css';
import '../../css/e/esxa21aaa.css';
import '../../css/x/x0ibg6b8h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tummrfb8r"/><path class="esxa21aaa"/><path class="x0ibg6b8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:cluster-management-outlined"} {...others} />);
}

export default Component;
