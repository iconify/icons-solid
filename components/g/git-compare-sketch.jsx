import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cx7y8abax.css';
import '../../css/y/y3ln0db1m.css';
import '../../css/m/m928-m55s.css';
import '../../css/i/imwl13zcx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cx7y8abax wm-k"/><path class="wm-k y3ln0db1m"/><path class="m928-m55s wm-k"/><path class="imwl13zcx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-compare-sketch"} {...others} />);
}

export default Component;
