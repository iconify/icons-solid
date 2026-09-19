import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt8_63gik.css';
import '../../css/a/a2pc2urid.css';
import '../../css/q/qkkblme1u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mt8_63gik"/><ellipse class="a2pc2urid"/><path class="qkkblme1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:ribbon"} {...others} />);
}

export default Component;
