import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cmta0755d.css';
import '../../css/b/b1hqolb1t.css';
import '../../css/k/klu756_3c.css';
import '../../css/c/c73t34bfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cmta0755d"/><path class="b1hqolb1t"/><path clip-rule="evenodd" class="klu756_3c"/><path class="c73t34bfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-lock-bold"} {...others} />);
}

export default Component;
