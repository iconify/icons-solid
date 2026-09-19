import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xoh_d-6_k.css';
import '../../css/j/jm2mnjbyt.css';
import '../../css/v/vo0s0d-xn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUUJ2XbXa"><g class="ufeehvblu"><path class="xoh_d-6_k"/><path class="jm2mnjbyt"/><path class="vo0s0d-xn"/></g></mask></defs><path mask="url(#SVGUUJ2XbXa)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:blackboard"} {...others} />);
}

export default Component;
