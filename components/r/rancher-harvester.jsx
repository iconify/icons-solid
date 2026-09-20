import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9l3hbf0t.css';
import '../../css/y/y0j0mcbcg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u9l3hbf0t"/><path class="y0j0mcbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rancher-harvester"} {...others} />);
}

export default Component;
