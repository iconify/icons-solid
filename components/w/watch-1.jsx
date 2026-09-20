import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/m0mma-8_r.css';
import '../../css/h/huarzwb0e.css';
import '../../css/p/ps0z-ubjk.css';
import '../../css/a/abn8r5pch.css';
import '../../css/g/gkx6s86fa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="m0mma-8_r"/><path class="huarzwb0e"/><path class="ps0z-ubjk"/><path class="abn8r5pch"/><path class="gkx6s86fa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:watch-1"} {...others} />);
}

export default Component;
