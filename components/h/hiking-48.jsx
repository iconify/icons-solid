import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v16uh-byn.css';
import '../../css/s/sahyts8de.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v16uh-byn"/><path class="sahyts8de"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hiking-48"} {...others} />);
}

export default Component;
