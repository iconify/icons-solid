import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmdr1llum.css';
import '../../css/r/r0z87ttka.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mmdr1llum"/><path class="r0z87ttka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-nacs-48-bold"} {...others} />);
}

export default Component;
