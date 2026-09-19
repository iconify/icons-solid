import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/v_-t39mhq.css';
import '../../css/s/s9mo7cbvx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="v_-t39mhq"/><path class="s9mo7cbvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:vegetable-basket"} {...others} />);
}

export default Component;
