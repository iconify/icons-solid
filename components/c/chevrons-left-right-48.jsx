import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qq-tdwb3q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qq-tdwb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevrons-left-right-48"} {...others} />);
}

export default Component;
