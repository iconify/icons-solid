import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/o8s2cpv2k.css';
import '../../css/m/mrlz4ibla.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="o8s2cpv2k"/><path class="mrlz4ibla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:label"} {...others} />);
}

export default Component;
