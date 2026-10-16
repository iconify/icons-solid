import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-y8ulbyu.css';
import '../../css/x/xovy7qr-g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g-y8ulbyu"/><path class="xovy7qr-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-sink-48-bold"} {...others} />);
}

export default Component;
