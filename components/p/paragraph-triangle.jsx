import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wnpdscbti.css';
import '../../css/w/wbi300b9a.css';
import '../../css/u/uknym9pqu.css';
import '../../css/x/xg8jp6das.css';
import '../../css/o/op-w_vrls.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="wnpdscbti"/><path class="wbi300b9a"/><path class="uknym9pqu"/><path class="xg8jp6das"/><path class="op-w_vrls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:paragraph-triangle"} {...others} />);
}

export default Component;
