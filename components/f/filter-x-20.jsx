import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok2n2nbsl.css';
import '../../css/q/q9_k86bve.css';
import '../../css/g/gfthn_qja.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ok2n2nbsl"/><path class="q9_k86bve"/><path class="gfthn_qja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:filter-x-20"} {...others} />);
}

export default Component;
