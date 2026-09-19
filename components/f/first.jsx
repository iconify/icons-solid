import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/y9asrdbdh.css';
import '../../css/m/m810m5fjg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="y9asrdbdh"/><path class="m810m5fjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:first"} {...others} />);
}

export default Component;
