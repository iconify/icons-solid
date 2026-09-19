import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jhawqmbyu.css';
import '../../css/o/op25h3b0z.css';
import '../../css/q/q53vh1vwi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="jhawqmbyu"/><path class="op25h3b0z"/><path class="q53vh1vwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tiger-zodiac"} {...others} />);
}

export default Component;
