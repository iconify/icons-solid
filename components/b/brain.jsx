import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/q30rolp3j.css';
import '../../css/f/f-b420_xl.css';
import '../../css/e/etqnjha5v.css';
import '../../css/n/n8dsurkgv.css';
import '../../css/t/tq9yzjbwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="q30rolp3j"/><path class="f-b420_xl wm-shine"/><path class="etqnjha5v wm-k"/><path class="n8dsurkgv wm-a"/><path class="tq9yzjbwu wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:brain"} {...others} />);
}

export default Component;
