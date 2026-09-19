import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k2zyqvp7q.css';
import '../../css/q/qxo9enbxi.css';
import '../../css/r/r7x5qdf6k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="k2zyqvp7q"/><path class="qxo9enbxi"/><path class="r7x5qdf6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:signal-50-duo"} {...others} />);
}

export default Component;
