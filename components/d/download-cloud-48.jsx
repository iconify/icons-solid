import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3ugn4t5k.css';
import '../../css/o/odh7t-j9j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g3ugn4t5k"/><path class="odh7t-j9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:download-cloud-48"} {...others} />);
}

export default Component;
