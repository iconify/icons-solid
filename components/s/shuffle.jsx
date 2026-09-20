import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bapu-hb-k.css';
import '../../css/c/cvqgpzbrk.css';
import '../../css/a/a4xvhq8py.css';
import '../../css/i/iv-5ich6c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="bapu-hb-k"/><path class="cvqgpzbrk"/><path class="a4xvhq8py"/><path class="iv-5ich6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:shuffle"} {...others} />);
}

export default Component;
