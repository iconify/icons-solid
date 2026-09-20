import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gwtb9fb5e.css';
import '../../css/p/p3a3-wxlk.css';
import '../../css/p/p9ekrnbem.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gwtb9fb5e"/><path class="p3a3-wxlk"/><path class="p9ekrnbem"/><path class="ko6o-6b9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dollar-minimalistic-broken"} {...others} />);
}

export default Component;
