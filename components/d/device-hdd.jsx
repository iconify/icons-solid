import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qxbr31b0h.css';
import '../../css/h/hswojb3hz.css';
import '../../css/q/qznqlw_ir.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="qxbr31b0h"/><path class="hswojb3hz"/><path class="qznqlw_ir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:device-hdd"} {...others} />);
}

export default Component;
