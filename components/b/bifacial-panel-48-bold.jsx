import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc35fpbpn.css';
import '../../css/h/h0-8fnbzh.css';
import '../../css/a/akezbuvtn.css';
import '../../css/i/ihmii9b0s.css';
import '../../css/s/s1v3140bh.css';
import '../../css/l/li-ym2bcx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lc35fpbpn"/><path class="h0-8fnbzh"/><path class="akezbuvtn"/><path class="ihmii9b0s"/><path class="s1v3140bh"/><path class="li-ym2bcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bifacial-panel-48-bold"} {...others} />);
}

export default Component;
