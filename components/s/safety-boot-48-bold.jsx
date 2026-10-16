import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lycgy4bwn.css';
import '../../css/c/cnifdczmc.css';
import '../../css/n/nzxup3_0u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lycgy4bwn"/><path class="cnifdczmc"/><path class="nzxup3_0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:safety-boot-48-bold"} {...others} />);
}

export default Component;
