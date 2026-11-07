import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azvjztbxn.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/l0cxmccps.css';
import '../../css/v/vpf4mac0n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="azvjztbxn"/><g class="xtpeb-edw"><path class="l0cxmccps"/><path class="vpf4mac0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:backpack-bold-duotone"} {...others} />);
}

export default Component;
