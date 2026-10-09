import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apb_dgbpm.css';
import '../../css/v/vw3o48bdx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="apb_dgbpm"/><path class="vw3o48bdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:microgrid-48-bold"} {...others} />);
}

export default Component;
