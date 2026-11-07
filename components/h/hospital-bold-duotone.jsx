import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqx3r_ngw.css';
import '../../css/o/o3p-r8q4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qqx3r_ngw"/><path class="o3p-r8q4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hospital-bold-duotone"} {...others} />);
}

export default Component;
