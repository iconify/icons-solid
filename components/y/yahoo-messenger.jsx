import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mz8xdsbdv.css';

const viewBox = {"width":464,"height":488};
const content = `<path class="mz8xdsbdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:yahoo-messenger"} {...others} />);
}

export default Component;
