import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snsrwjb2q.css';
import '../../css/a/a35pl3byc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="snsrwjb2q"/><path class="a35pl3byc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermistor-48"} {...others} />);
}

export default Component;
