import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wrb5chb2g.css';
import '../../css/w/wbdap1rkv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="wrb5chb2g"/><path class="wbdap1rkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:arrow-left"} {...others} />);
}

export default Component;
