import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/v/vzvejhd5m.css';
import '../../css/x/xcmo0acsd.css';
import '../../css/k/k0i3-hbxj.css';
import '../../css/e/e7647acjt.css';
import '../../css/m/mas0jobrt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="vzvejhd5m"/><path class="xcmo0acsd"/><path class="k0i3-hbxj"/><path class="e7647acjt"/><ellipse class="mas0jobrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:french-fries"} {...others} />);
}

export default Component;
