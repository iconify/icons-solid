import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/p/p6x4uactl.css';
import '../../css/y/ygihsgtev.css';
import '../../css/x/xzm23acqn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="p6x4uactl"/><path class="ygihsgtev"/><path class="xzm23acqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bowl-one"} {...others} />);
}

export default Component;
