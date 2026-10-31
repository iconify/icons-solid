import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/am013tb7n.css';
import '../../css/g/g10l0epqo.css';
import '../../css/a/a7not2p8q.css';
import '../../css/e/e-x1c4yrw.css';
import '../../css/m/m4gqnvbgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="am013tb7n"/><path class="g10l0epqo wm-shine"/><path class="a7not2p8q wm-k"/><path class="e-x1c4yrw wm-a"/><path class="m4gqnvbgu wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:text-cursor-input"} {...others} />);
}

export default Component;
