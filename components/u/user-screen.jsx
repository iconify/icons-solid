import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsp8oibje.css';
import '../../css/h/hm1y-ikxm.css';
import '../../css/o/o_zoskb9p.css';
import '../../css/j/jn66gsbzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bsp8oibje"/><path class="hm1y-ikxm"/><path class="o_zoskb9p"/><path class="jn66gsbzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-screen"} {...others} />);
}

export default Component;
