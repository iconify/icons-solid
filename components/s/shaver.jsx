import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/x/xzh_evzrj.css';
import '../../css/s/s9ldjn-an.css';
import '../../css/e/es5ueib9p.css';
import '../../css/u/u8d3u0wlo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="xzh_evzrj"/><path class="s9ldjn-an"/><path class="es5ueib9p"/><path class="u8d3u0wlo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shaver"} {...others} />);
}

export default Component;
