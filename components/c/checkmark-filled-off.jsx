import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yh-bcbcdd.css';
import '../../css/x/x5q-macsu.css';
import '../../css/f/fk592nv7k.css';
import '../../css/a/a1tx6bc4w.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yh-bcbcdd"/><path clip-rule="evenodd" class="x5q-macsu"/><path clip-rule="evenodd" class="fk592nv7k"/><path clip-rule="evenodd" class="a1tx6bc4w"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:checkmark-filled-off"} {...others} />);
}

export default Component;
