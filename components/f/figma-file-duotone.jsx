import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pjj4tybjd.css';
import '../../css/q/q76xs3pzf.css';
import '../../css/u/uowju7b0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pjj4tybjd"/><path clip-rule="evenodd" class="q76xs3pzf"/><path class="uowju7b0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:figma-file-duotone"} {...others} />);
}

export default Component;
