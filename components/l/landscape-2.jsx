import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/p/pseld3bah.css';
import '../../css/y/yxu020-kc.css';
import '../../css/d/dhl471b4a.css';
import '../../css/l/ldkkwxbud.css';
import '../../css/m/mqcdqoufx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="pseld3bah"/><path class="yxu020-kc"/><path class="dhl471b4a"/><path class="ldkkwxbud"/><path class="mqcdqoufx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:landscape-2"} {...others} />);
}

export default Component;
