import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/eqh599b0q.css';
import '../../css/b/bcx4akb6l.css';
import '../../css/b/bxjv56brc.css';
import '../../css/g/g1fhopbni.css';
import '../../css/h/h4vcpvbdh.css';
import '../../css/b/b8ywt4m7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="eqh599b0q wm-deco"/><path class="bcx4akb6l wm-deco"/><path class="bxjv56brc wm-deco"/><path class="g1fhopbni wm-k"/><path class="h4vcpvbdh wm-a"/><path class="b8ywt4m7i wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cat-blueprint"} {...others} />);
}

export default Component;
