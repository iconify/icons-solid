import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zqe53bcgg.css';
import '../../css/n/nuqn2cpjz.css';
import '../../css/v/v9c7lmbfs.css';
import '../../css/j/jjgp8umbu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="zqe53bcgg"/><path class="nuqn2cpjz"/><path class="v9c7lmbfs"/><path class="jjgp8umbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:clown-face"} {...others} />);
}

export default Component;
