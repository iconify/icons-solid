import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptp__nb5l.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ptp__nb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:justice2x-outline"} {...others} />);
}

export default Component;
