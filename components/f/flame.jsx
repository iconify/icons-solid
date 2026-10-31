import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/er9lmqpyp.css';
import '../../css/x/x0h6ncj5k.css';
import '../../css/o/o9xcesbno.css';
import '../../css/l/lb5z5tb2v.css';
import '../../css/b/bmlr6ob0i.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="er9lmqpyp"/><path class="x0h6ncj5k"/><path class="o9xcesbno wm-shine"/><path class="lb5z5tb2v wm-k"/><path class="bmlr6ob0i wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:flame"} {...others} />);
}

export default Component;
