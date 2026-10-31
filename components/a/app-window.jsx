import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dpndwwtgs.css';
import '../../css/m/mml7skbfj.css';
import '../../css/b/bht756bnp.css';
import '../../css/g/g136touho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dpndwwtgs"/><path class="mml7skbfj wm-shine"/><path class="bht756bnp wm-k"/><path class="g136touho wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:app-window"} {...others} />);
}

export default Component;
