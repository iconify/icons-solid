import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l-160pqjr.css';
import '../../css/z/zzvbegbls.css';
import '../../css/s/sxg01zbqn.css';
import '../../css/e/e_0o1rbfz.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="l-160pqjr"/><path class="wm-shine zzvbegbls"/><path class="sxg01zbqn wm-k"/><path class="e_0o1rbfz wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:watch"} {...others} />);
}

export default Component;
