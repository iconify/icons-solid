import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mnh5f9zfq.css';
import '../../css/o/ocruyxbsi.css';
import '../../css/h/hpyym12cz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="mnh5f9zfq"/><path class="ocruyxbsi"/><rect class="hpyym12cz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:spoon"} {...others} />);
}

export default Component;
