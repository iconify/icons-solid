import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-hb89b0y.css';
import '../../css/q/qm_24p8td.css';
import '../../css/p/p97rajbdm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z-hb89b0y"/><path class="qm_24p8td"/><path class="p97rajbdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coffee-machine-48"} {...others} />);
}

export default Component;
