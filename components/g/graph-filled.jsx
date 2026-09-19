import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bztnfgb8s.css';
import '../../css/p/pwye_sbti.css';
import '../../css/h/h8fcp6xyp.css';
import '../../css/d/d86m1dbzs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bztnfgb8s"/><rect class="pwye_sbti"/><rect class="h8fcp6xyp"/><rect class="d86m1dbzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:graph-filled"} {...others} />);
}

export default Component;
