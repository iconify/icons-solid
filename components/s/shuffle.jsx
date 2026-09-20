import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/n/n_8vkzsqx.css';
import '../../css/h/h2d4w9b-e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="n_8vkzsqx"/><path class="h2d4w9b-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shuffle"} {...others} />);
}

export default Component;
