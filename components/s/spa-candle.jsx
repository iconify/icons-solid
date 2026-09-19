import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g-o9zhevq.css';
import '../../css/j/jh580j15b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="g-o9zhevq"/><path class="jh580j15b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:spa-candle"} {...others} />);
}

export default Component;
