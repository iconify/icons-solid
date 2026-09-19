import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/x2z_rsb1z.css';
import '../../css/n/n5ebylmjb.css';
import '../../css/a/as2017bxh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="x2z_rsb1z"/><path class="n5ebylmjb"/><rect class="as2017bxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:intersection"} {...others} />);
}

export default Component;
