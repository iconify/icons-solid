import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mjzvuibua.css';
import '../../css/b/b5nir9bma.css';
import '../../css/o/oc02p8b1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mjzvuibua"/><path class="b5nir9bma wm-a"/><path class="oc02p8b1x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:peacock-feather"} {...others} />);
}

export default Component;
