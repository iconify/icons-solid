import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yuvdc2bma.css';
import '../../css/u/u04sb4b-v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yuvdc2bma"/><path class="u04sb4b-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rego-certificate-48"} {...others} />);
}

export default Component;
