import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/o7qhtactx.css';
import '../../css/l/lllogccpz.css';
import '../../css/c/cybe97bxb.css';
import '../../css/n/n3jvmegul.css';
import '../../css/f/ffnj5pzwv.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="o7qhtactx"/><path class="lllogccpz"/><path class="cybe97bxb wm-shine"/><path class="n3jvmegul wm-k"/><path class="ffnj5pzwv wm-a"/><path class="a0o9nky4v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:file-search"} {...others} />);
}

export default Component;
