import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayan5y9nl.css';
import '../../css/q/qhc6f6b0w.css';
import '../../css/i/inu9gabyk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ayan5y9nl"/><path class="qhc6f6b0w"/><path class="inu9gabyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:engineer-48-bold"} {...others} />);
}

export default Component;
