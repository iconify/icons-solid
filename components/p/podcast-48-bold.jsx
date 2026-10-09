import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdk3tib5a.css';
import '../../css/s/s61-nmb9n.css';
import '../../css/o/ozbsdeb5e.css';
import '../../css/u/up_jo7btn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vdk3tib5a"/><path class="s61-nmb9n"/><path class="ozbsdeb5e"/><path class="up_jo7btn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:podcast-48-bold"} {...others} />);
}

export default Component;
