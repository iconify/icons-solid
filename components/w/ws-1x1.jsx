import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/i/i4xydol5b.css';
import '../../css/c/c9yt0g5nq.css';
import '../../css/s/s04bc1zdq.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="i4xydol5b"/><path class="c9yt0g5nq"/><path class="s04bc1zdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ws-1x1"} {...others} />);
}

export default Component;
