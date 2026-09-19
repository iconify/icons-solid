import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wsfij0b4p.css';
import '../../css/n/ncxiq1q2o.css';
import '../../css/i/il2eyjbiw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="wsfij0b4p"/><path class="ncxiq1q2o"/><path class="il2eyjbiw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:fingerprint-two"} {...others} />);
}

export default Component;
