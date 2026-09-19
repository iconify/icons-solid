import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/li8omp20o.css';
import '../../css/t/typubzb2u.css';
import '../../css/q/qxxbbs_qk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="li8omp20o"/><path clip-rule="evenodd" class="typubzb2u"/><path clip-rule="evenodd" class="qxxbbs_qk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:elevator"} {...others} />);
}

export default Component;
