import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ma2gzy3et.css';
import '../../css/t/tpblc1bjs.css';
import '../../css/q/qsvxid4dc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ma2gzy3et"/><path class="tpblc1bjs"/><path class="qsvxid4dc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:corkscrew-bold-duotone"} {...others} />);
}

export default Component;
