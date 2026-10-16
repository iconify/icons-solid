import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elj7bpqnj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="elj7bpqnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:landfill-48"} {...others} />);
}

export default Component;
