import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4kr7db0h.css';
import '../../css/k/k05iw0abz.css';
import '../../css/o/oc0vi5bvd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k4kr7db0h"><path class="k05iw0abz"/><path class="oc0vi5bvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:phone-off-bold"} {...others} />);
}

export default Component;
