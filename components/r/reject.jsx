import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d58itublv.css';
import '../../css/y/y6uzgk7ws.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="d58itublv"/><path class="y6uzgk7ws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:reject"} {...others} />);
}

export default Component;
