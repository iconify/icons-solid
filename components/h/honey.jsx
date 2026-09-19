import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l24eq7b1k.css';
import '../../css/g/gyvowbb7z.css';
import '../../css/q/qzdx_s0vk.css';
import '../../css/j/jl-543bif.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="l24eq7b1k"/><path class="gyvowbb7z"/><path class="qzdx_s0vk"/><path class="jl-543bif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:honey"} {...others} />);
}

export default Component;
