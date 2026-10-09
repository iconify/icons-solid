import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcfuqov3g.css';
import '../../css/m/mdy5cy31n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gcfuqov3g"/><path class="mdy5cy31n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:image-48-bold"} {...others} />);
}

export default Component;
