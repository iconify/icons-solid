import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qavvhzbqa.css';
import '../../css/v/vkgg09bpx.css';
import '../../css/e/euj49csjz.css';
import '../../css/h/h4luupb7n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qavvhzbqa"/><path class="vkgg09bpx wm-shine"/><path class="euj49csjz wm-k"/><path class="h4luupb7n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:terminal"} {...others} />);
}

export default Component;
