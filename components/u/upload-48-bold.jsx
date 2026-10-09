import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5llwvbom.css';
import '../../css/m/moizz8y3x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g5llwvbom"/><path class="moizz8y3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:upload-48-bold"} {...others} />);
}

export default Component;
