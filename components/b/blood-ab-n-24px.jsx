import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hi5i8ybgo.css';
import '../../css/u/ua0wb2e8z.css';
import '../../css/q/qack6wv-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hi5i8ybgo"/><path clip-rule="evenodd" class="ua0wb2e8z"/><path class="qack6wv-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-ab-n-24px"} {...others} />);
}

export default Component;
