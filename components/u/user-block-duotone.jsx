import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h9kqrfbgx.css';
import '../../css/i/iof_a_26r.css';
import '../../css/x/xs_sbwbww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="h9kqrfbgx"/><path clip-rule="evenodd" class="iof_a_26r"/><path class="xs_sbwbww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-block-duotone"} {...others} />);
}

export default Component;
