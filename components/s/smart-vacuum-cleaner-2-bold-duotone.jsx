import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/v/v5wadhqzm.css';
import '../../css/f/fua2m0b8b.css';
import '../../css/k/kon8nnbos.css';
import '../../css/u/udblqq3tl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="v5wadhqzm"/><path class="fua2m0b8b"/></g><path class="kon8nnbos"/><path clip-rule="evenodd" class="udblqq3tl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-vacuum-cleaner-2-bold-duotone"} {...others} />);
}

export default Component;
