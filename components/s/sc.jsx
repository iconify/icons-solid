import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jbenfcpdi.css';
import '../../css/x/xgkw0sf-o.css';
import '../../css/k/ki1eibbkl.css';
import '../../css/f/f2jkcrhmz.css';
import '../../css/l/lrjc6obwt.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="jbenfcpdi"/><path class="xgkw0sf-o"/><path class="ki1eibbkl"/><path class="f2jkcrhmz"/><path class="lrjc6obwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:sc"} {...others} />);
}

export default Component;
