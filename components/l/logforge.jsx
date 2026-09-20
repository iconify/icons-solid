import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4feargwz.css';
import '../../css/k/kw2-ojbmz.css';
import '../../css/g/grn2r87va.css';
import '../../css/b/bbv-wabqh.css';
import '../../css/l/lu5k3cc8w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x4feargwz"/><path class="kw2-ojbmz"/><path class="grn2r87va"/><path class="bbv-wabqh"/><path class="lu5k3cc8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:logforge"} {...others} />);
}

export default Component;
