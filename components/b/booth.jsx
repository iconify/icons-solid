import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/posz-uy-t.css';
import '../../css/k/k6sx21i-s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="posz-uy-t"/><path class="k6sx21i-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:booth"} {...others} />);
}

export default Component;
