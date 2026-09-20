import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kk9_s9btc.css';
import '../../css/p/pg0ow4lpj.css';
import '../../css/q/qyhe7cbhy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="kk9_s9btc"/><path clip-rule="evenodd" class="pg0ow4lpj"/><path class="qyhe7cbhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:film"} {...others} />);
}

export default Component;
