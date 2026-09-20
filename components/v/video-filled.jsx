import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s98k5ybiu.css';
import '../../css/o/oaonj8bqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s98k5ybiu"/><path class="oaonj8bqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:video-filled"} {...others} />);
}

export default Component;
