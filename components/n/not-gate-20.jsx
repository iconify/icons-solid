import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/na4jw2bku.css';
import '../../css/k/kchk1uyxs.css';
import '../../css/q/qe_9a6udo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="na4jw2bku"/><path class="kchk1uyxs"/><path class="qe_9a6udo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:not-gate-20"} {...others} />);
}

export default Component;
