import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tje-abbuo.css';
import '../../css/o/ouqw72bnf.css';
import '../../css/v/vq9mycbnp.css';
import '../../css/k/k17oehb3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tje-abbuo wm-k"/><path class="ouqw72bnf wm-k"/><path class="vq9mycbnp wm-k"/><path class="k17oehb3u wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:close"} {...others} />);
}

export default Component;
