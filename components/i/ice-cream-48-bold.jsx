import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w98uktbvf.css';
import '../../css/e/e3n-urbva.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w98uktbvf"/><path class="e3n-urbva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ice-cream-48-bold"} {...others} />);
}

export default Component;
