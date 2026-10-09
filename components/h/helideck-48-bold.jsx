import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of8ozpb-y.css';
import '../../css/n/nk1dwkb8d.css';
import '../../css/t/tm6yvh82x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="of8ozpb-y"/><path class="nk1dwkb8d"/><path class="tm6yvh82x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:helideck-48-bold"} {...others} />);
}

export default Component;
