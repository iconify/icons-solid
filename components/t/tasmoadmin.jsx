import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp_egdbju.css';
import '../../css/n/nxo71mbmw.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="xp_egdbju"/><path class="nxo71mbmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tasmoadmin"} {...others} />);
}

export default Component;
