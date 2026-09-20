import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cpuequbzk.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/d/d_26pbbpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="cpuequbzk"/><circle class="aqhok2bbj"/><path class="d_26pbbpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:chrome"} {...others} />);
}

export default Component;
