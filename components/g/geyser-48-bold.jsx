import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6cvwtbsp.css';
import '../../css/e/eh_8zfvcn.css';
import '../../css/r/rmyb_66he.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d6cvwtbsp"/><path class="eh_8zfvcn"/><path class="rmyb_66he"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geyser-48-bold"} {...others} />);
}

export default Component;
