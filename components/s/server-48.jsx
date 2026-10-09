import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mniqmdgfa.css';
import '../../css/o/onpzv9a2a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mniqmdgfa"/><path class="onpzv9a2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:server-48"} {...others} />);
}

export default Component;
