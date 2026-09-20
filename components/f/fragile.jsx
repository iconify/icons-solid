import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shz0f38ym.css';
import '../../css/g/gpn7n8bbn.css';
import '../../css/n/nvd9w-b3s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="shz0f38ym"/><path class="gpn7n8bbn"/><path class="nvd9w-b3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:fragile"} {...others} />);
}

export default Component;
