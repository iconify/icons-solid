import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/ufzwhw8qy.css';
import '../../css/l/l3u7fomsm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ufzwhw8qy"/><path class="l3u7fomsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:reverse-rotation"} {...others} />);
}

export default Component;
