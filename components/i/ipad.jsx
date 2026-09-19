import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/zlkmdccij.css';
import '../../css/m/m3vs2vbzx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><rect class="zlkmdccij"/><path class="m3vs2vbzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ipad"} {...others} />);
}

export default Component;
