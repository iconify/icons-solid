import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ukszeygmg.css';
import '../../css/f/fi8b70b0k.css';
import '../../css/z/z1gu1ybvc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ukszeygmg"/><path class="fi8b70b0k"/><path clip-rule="evenodd" class="z1gu1ybvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cup-hot-duotone"} {...others} />);
}

export default Component;
