import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/x7kwipb1c.css';
import '../../css/t/ts1dqou4v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="x7kwipb1c"/><path class="ts1dqou4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:xiaodu-home"} {...others} />);
}

export default Component;
