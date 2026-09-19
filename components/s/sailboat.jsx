import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr36qhbyi.css';
import '../../css/d/d_m2gcfww.css';
import '../../css/o/odw9_0-5w.css';
import '../../css/s/smgatp7ir.css';
import '../../css/r/rejaxfbru.css';
import '../../css/z/zpumeab6m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="tr36qhbyi"><path class="d_m2gcfww"/><path class="odw9_0-5w"/><path class="smgatp7ir"/><path class="rejaxfbru"/><path class="zpumeab6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sailboat"} {...others} />);
}

export default Component;
