import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4ur-u-fw.css';
import '../../css/n/nx2cs9m-t.css';
import '../../css/f/f8ha_hbgo.css';
import '../../css/o/o-c19faly.css';
import '../../css/y/ykdgn-v-n.css';
import '../../css/a/a-a9l4-hy.css';
import '../../css/m/m4hhvbb1t.css';
import '../../css/b/bwohyzbes.css';
import '../../css/e/evmri-7fl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m4ur-u-fw wm-shadow"/><path class="nx2cs9m-t wm-k"/><path class="f8ha_hbgo wm-k"/><path class="o-c19faly wm-k"/><path class="wm-k ykdgn-v-n"/><path class="a-a9l4-hy wm-k"/><path class="m4hhvbb1t wm-shine"/><path class="bwohyzbes wm-a"/><path class="evmri-7fl wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:chart-network"} {...others} />);
}

export default Component;
