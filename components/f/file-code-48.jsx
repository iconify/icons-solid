import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dezwopb-j.css';
import '../../css/d/dqchx1bzk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dezwopb-j"/><path class="dqchx1bzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-code-48"} {...others} />);
}

export default Component;
