import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/k0r1-bpyg.css';
import '../../css/t/t1zv-t2di.css';
import '../../css/k/k0qs90g5y.css';
import '../../css/o/oi2egebiq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="k0r1-bpyg wm-k"/><path class="t1zv-t2di wm-a"/><path class="k0qs90g5y wm-s"/><path class="oi2egebiq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:spell-check"} {...others} />);
}

export default Component;
