import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drv7s9bde.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="drv7s9bde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:boy-1015y-outline"} {...others} />);
}

export default Component;
