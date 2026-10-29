import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-kns4b_k.css';
import '../../css/n/nn99b3bmc.css';
import '../../css/z/zrz10gb0o.css';
import '../../css/p/p-t-3mbxp.css';
import '../../css/e/e58oylbzg.css';
import '../../css/t/tllpp7vsj.css';
import '../../css/c/csivexbrp.css';
import '../../css/e/e6bkcvb-a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-kns4b_k wm-shadow"/><path class="nn99b3bmc wm-k"/><path class="wm-k zrz10gb0o"/><path class="p-t-3mbxp wm-k"/><path class="e58oylbzg wm-k"/><path class="tllpp7vsj wm-k"/><path class="csivexbrp wm-shine"/><path class="e6bkcvb-a wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:candy-cane"} {...others} />);
}

export default Component;
