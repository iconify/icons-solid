import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rptkid02y.css';
import '../../css/h/hk74r7aft.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="rptkid02y"/><path class="hk74r7aft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tips"} {...others} />);
}

export default Component;
