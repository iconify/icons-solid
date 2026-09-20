import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kjiiozbzk.css';
import '../../css/d/d0sswwv0y.css';
import '../../css/q/q04zakb7t.css';
import '../../css/t/ti87jsbtx.css';
import '../../css/g/guwc719wd.css';
import '../../css/x/xfkblul_o.css';
import '../../css/k/kpvn6819j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kjiiozbzk"/><path class="d0sswwv0y"/><path class="q04zakb7t"/><path class="ti87jsbtx"/><path class="guwc719wd"/><path class="xfkblul_o"/><path class="kpvn6819j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:city-hall"} {...others} />);
}

export default Component;
