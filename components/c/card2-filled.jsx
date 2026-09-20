import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b4yvx5bqg.css';
import '../../css/q/qwt0l5e7j.css';
import '../../css/s/s-k-uwbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b4yvx5bqg"/><path clip-rule="evenodd" class="qwt0l5e7j"/><path class="s-k-uwbvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card2-filled"} {...others} />);
}

export default Component;
