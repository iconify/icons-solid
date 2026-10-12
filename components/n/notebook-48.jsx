import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfgr-6b4b.css';
import '../../css/q/q93ngmbes.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zfgr-6b4b"/><path class="q93ngmbes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:notebook-48"} {...others} />);
}

export default Component;
