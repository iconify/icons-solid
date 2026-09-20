import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u6gf63mim.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/d/dinhgvbju.css';
import '../../css/l/l-z90qban.css';
import '../../css/g/ge8kibcyo.css';
import '../../css/x/xd6vkdjpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u6gf63mim"/><g class="mc2zb0bvp"><path class="dinhgvbju"/><path class="l-z90qban"/></g><path class="ge8kibcyo"/><path class="xd6vkdjpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:perfume-duotone"} {...others} />);
}

export default Component;
