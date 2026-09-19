import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/j3e3dd6zq.css';
import '../../css/r/rbj55nd1k.css';
import '../../css/a/a-a-hhclv.css';
import '../../css/x/x-l1wm5up.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="j3e3dd6zq"/><path class="rbj55nd1k"/><path class="a-a-hhclv"/><path class="x-l1wm5up"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:link-one"} {...others} />);
}

export default Component;
