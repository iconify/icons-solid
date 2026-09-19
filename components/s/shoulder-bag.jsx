import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/mmnjdfbni.css';
import '../../css/f/f2r7aqcds.css';
import '../../css/t/tt4z5sb8s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="mmnjdfbni"/><path class="f2r7aqcds"/><circle class="tt4z5sb8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shoulder-bag"} {...others} />);
}

export default Component;
