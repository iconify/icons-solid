import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmcricc-j.css';
import '../../css/k/kkd7-e-we.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pmcricc-j"/><path class="kkd7-e-we"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-plug-48-bold"} {...others} />);
}

export default Component;
