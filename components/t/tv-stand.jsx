import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/b28k3ippi.css';
import '../../css/r/r_z0qdr1l.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="b28k3ippi"/><path class="r_z0qdr1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:tv-stand"} {...others} />);
}

export default Component;
