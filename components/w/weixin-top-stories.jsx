import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xgoxkwbgw.css';
import '../../css/a/a1oepsyvp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="xgoxkwbgw"/><path class="a1oepsyvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:weixin-top-stories"} {...others} />);
}

export default Component;
