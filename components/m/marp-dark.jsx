import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-ttwubdw.css';
import '../../css/v/vxrrplwnx.css';
import '../../css/b/bwdyegfbl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h-ttwubdw"/><path class="vxrrplwnx"/><path class="bwdyegfbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:marp-dark"} {...others} />);
}

export default Component;
