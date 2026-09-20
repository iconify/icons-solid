import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxs996u1a.css';
import '../../css/w/wyay58blh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qxs996u1a"/><path class="wyay58blh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:spacex"} {...others} />);
}

export default Component;
