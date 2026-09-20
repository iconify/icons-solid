import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zatq3pxwu.css';
import '../../css/z/zq1yvvbci.css';
import '../../css/s/swsab_86e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zatq3pxwu"/><path clip-rule="evenodd" class="zq1yvvbci"/><circle class="swsab_86e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder-link-duotone"} {...others} />);
}

export default Component;
