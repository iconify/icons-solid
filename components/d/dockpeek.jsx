import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvr4ljncy.css';
import '../../css/q/qf_fqfblh.css';
import '../../css/s/sopu2lbmd.css';
import '../../css/r/rksq5bbnd.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="uvr4ljncy"/><path class="qf_fqfblh"/><path class="sopu2lbmd"/><circle class="rksq5bbnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dockpeek"} {...others} />);
}

export default Component;
