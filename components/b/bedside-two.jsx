import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mtkkfsbrb.css';
import '../../css/i/iad93baoy.css';
import '../../css/j/jcrlfrbgh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="mtkkfsbrb"/><path clip-rule="evenodd" class="iad93baoy"/><path class="jcrlfrbgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bedside-two"} {...others} />);
}

export default Component;
