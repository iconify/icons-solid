import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/y/y97q9l2_w.css';
import '../../css/v/v6bcz-bfu.css';
import '../../css/z/zefgjeb6c.css';
import '../../css/t/tvb3o9byw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path clip-rule="evenodd" class="y97q9l2_w"/><path class="v6bcz-bfu"/><path class="zefgjeb6c"/><path class="tvb3o9byw"/></g><path class="v6bcz-bfu"/><path class="zefgjeb6c"/><path class="tvb3o9byw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:soundwave-circle-bold-duotone"} {...others} />);
}

export default Component;
