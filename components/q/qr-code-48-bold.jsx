import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qc34sgq8u.css';
import '../../css/h/hbw3jz6bp.css';
import '../../css/j/j-667kb4n.css';
import '../../css/s/sm1_hto_o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qc34sgq8u"/><path class="hbw3jz6bp"/><path class="j-667kb4n"/><path class="sm1_hto_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:qr-code-48-bold"} {...others} />);
}

export default Component;
