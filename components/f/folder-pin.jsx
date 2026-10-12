import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ozpu67bss.css';
import '../../css/s/s-og5ebwk.css';
import '../../css/h/ha-v643ns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ozpu67bss"/><path class="s-og5ebwk"/><path class="ha-v643ns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-pin"} {...others} />);
}

export default Component;
