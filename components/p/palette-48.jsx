import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddna9niwb.css';
import '../../css/g/g2r0sac-v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ddna9niwb"/><path class="g2r0sac-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:palette-48"} {...others} />);
}

export default Component;
