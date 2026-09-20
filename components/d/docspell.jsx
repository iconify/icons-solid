import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/keo_ub1ao.css';
import '../../css/m/mrxynabnu.css';
import '../../css/v/vgjcg77tr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="keo_ub1ao"/><path class="mrxynabnu"/><path class="vgjcg77tr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:docspell"} {...others} />);
}

export default Component;
