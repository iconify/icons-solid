import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/tt78vu_jh.css';
import '../../css/e/e6dxm8bil.css';
import '../../css/t/t-098--sw.css';
import '../../css/j/jp2mmyb-q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path clip-rule="evenodd" class="tt78vu_jh"/><path class="e6dxm8bil"/><path clip-rule="evenodd" class="t-098--sw"/><path class="jp2mmyb-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:magnet"} {...others} />);
}

export default Component;
