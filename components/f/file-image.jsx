import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/d3_kq194u.css';
import '../../css/w/w71o0-pby.css';
import '../../css/n/n3jvmegul.css';
import '../../css/k/kywtiqb7d.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="d3_kq194u"/><path class="w71o0-pby wm-shine"/><path class="n3jvmegul wm-k"/><path class="kywtiqb7d wm-a"/><path class="a0o9nky4v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:file-image"} {...others} />);
}

export default Component;
