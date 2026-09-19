import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/d/dtifev8gr.css';
import '../../css/i/izc3rturx.css';
import '../../css/v/vqf8h-68t.css';
import '../../css/k/kqwrzbgpo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="dtifev8gr"/><path class="izc3rturx"/><path class="vqf8h-68t"/><path class="kqwrzbgpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sd"} {...others} />);
}

export default Component;
