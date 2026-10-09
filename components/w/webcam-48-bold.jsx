import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqr8yp28h.css';
import '../../css/f/f4mdfjbca.css';
import '../../css/x/xm577jbwp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fqr8yp28h"/><path class="f4mdfjbca"/><path class="xm577jbwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:webcam-48-bold"} {...others} />);
}

export default Component;
