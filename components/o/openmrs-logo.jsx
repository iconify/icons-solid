import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bir3djc_j.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="bir3djc_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:openmrs-logo"} {...others} />);
}

export default Component;
