import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1o8r1a2a.css';
import '../../css/u/ux49e7bkd.css';
import '../../css/n/nn0frab6c.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r1o8r1a2a"/><path class="ux49e7bkd"/><path class="nn0frab6c"/><path class="ihmii9b0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offshore-hydrogen-48-bold"} {...others} />);
}

export default Component;
