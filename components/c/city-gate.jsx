import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/d9lreu_xt.css';
import '../../css/l/lm9e4db0f.css';
import '../../css/l/lazl2-mwt.css';
import '../../css/d/d-m6ebcne.css';
import '../../css/p/pw2bzpbnn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="d9lreu_xt"/><path class="lm9e4db0f"/><path class="lazl2-mwt"/><path class="d-m6ebcne"/><path class="pw2bzpbnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:city-gate"} {...others} />);
}

export default Component;
