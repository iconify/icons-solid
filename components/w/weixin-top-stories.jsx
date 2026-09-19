import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uns4e8bmd.css';
import '../../css/m/m5b6xqb-l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="uns4e8bmd"/><path class="m5b6xqb-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:weixin-top-stories"} {...others} />);
}

export default Component;
