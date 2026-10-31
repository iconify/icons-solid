import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/u9a5labme.css';
import '../../css/u/usbyh2bii.css';
import '../../css/t/taaqanbit.css';
import '../../css/v/vxyac5iur.css';
import '../../css/t/tgsx53bsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="u9a5labme"/><path class="usbyh2bii wm-shine"/><path class="taaqanbit wm-k"/><path class="vxyac5iur wm-a"/><path class="tgsx53bsj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:banana"} {...others} />);
}

export default Component;
