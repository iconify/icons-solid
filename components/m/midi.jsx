import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuvjg7bnh.css';
import '../../css/b/bb-8rwkou.css';
import '../../css/i/iic0_9tig.css';

const viewBox = {"width":16,"height":17};
const content = `<g class="kuvjg7bnh"><path class="bb-8rwkou"/><path class="iic0_9tig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:midi"} {...others} />);
}

export default Component;
