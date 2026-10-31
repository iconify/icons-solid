import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fw22vcbnw.css';
import '../../css/d/da9i-lbyc.css';
import '../../css/n/n3jvmegul.css';
import '../../css/n/nhuft9bkb.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="fw22vcbnw"/><path class="da9i-lbyc wm-shine"/><path class="n3jvmegul wm-k"/><path class="nhuft9bkb wm-a"/><path class="a0o9nky4v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:file-question"} {...others} />);
}

export default Component;
