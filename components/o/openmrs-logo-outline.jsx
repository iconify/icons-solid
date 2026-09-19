import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmd40gk4h.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="bmd40gk4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:openmrs-logo-outline"} {...others} />);
}

export default Component;
