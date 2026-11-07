import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnb90nbxf.css';
import '../../css/q/qazb7jbeb.css';
import '../../css/y/y4zl2mbio.css';
import '../../css/o/o-v99zb0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnb90nbxf"/><path class="qazb7jbeb"/><path class="y4zl2mbio"/><path class="o-v99zb0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:menu-dots-circle-bold-duotone"} {...others} />);
}

export default Component;
