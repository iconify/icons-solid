import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rf9z-jb7h.css';
import '../../css/a/ah_0o9bzq.css';
import '../../css/j/jih-r1b_t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rf9z-jb7h"/><path class="ah_0o9bzq"/><path class="jih-r1b_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-panel-bolt-48"} {...others} />);
}

export default Component;
