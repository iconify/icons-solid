import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m40s8qb1e.css';
import '../../css/c/cgwmnbmon.css';
import '../../css/e/e2o_qwb2y.css';
import '../../css/n/n3jvmegul.css';
import '../../css/i/iljthd3mo.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="m40s8qb1e"/><path class="cgwmnbmon"/><path class="e2o_qwb2y wm-shine"/><path class="n3jvmegul wm-k"/><path class="iljthd3mo wm-a"/><path class="a0o9nky4v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:file-archive"} {...others} />);
}

export default Component;
