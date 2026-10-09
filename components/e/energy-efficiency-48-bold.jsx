import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffy_fhb2a.css';
import '../../css/n/n8n104bks.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ffy_fhb2a"/><path class="n8n104bks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-efficiency-48-bold"} {...others} />);
}

export default Component;
