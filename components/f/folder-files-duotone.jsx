import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xej-7lbhg.css';
import '../../css/c/c2j0naclm.css';
import '../../css/k/kxq-picmp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xej-7lbhg"/><path class="c2j0naclm"/><path clip-rule="evenodd" class="kxq-picmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder-files-duotone"} {...others} />);
}

export default Component;
