import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mamdlmb_f.css';
import '../../css/v/v8lrvwzjl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="mamdlmb_f"/><path class="v8lrvwzjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:weixin-market"} {...others} />);
}

export default Component;
