import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohg2owb1n.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ohg2owb1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:sling2x-outline"} {...others} />);
}

export default Component;
