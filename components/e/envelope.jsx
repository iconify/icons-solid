import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/x9o68l7ys.css';
import '../../css/l/lq5uxcqqs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="x9o68l7ys"/><path class="lq5uxcqqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:envelope"} {...others} />);
}

export default Component;
