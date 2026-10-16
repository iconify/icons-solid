import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlsrljbwz.css';
import '../../css/y/yokveq1he.css';
import '../../css/d/db2grsbbs.css';
import '../../css/u/ul6bszbon.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rlsrljbwz"/><path class="yokveq1he"/><path class="db2grsbbs"/><path class="ul6bszbon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frost-protection-48"} {...others} />);
}

export default Component;
