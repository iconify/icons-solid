import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulra56alq.css';
import '../../css/w/w03w98eed.css';
import '../../css/z/zx5so0b7e.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ulra56alq"><path class="w03w98eed"/><path class="zx5so0b7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:alex"} {...others} />);
}

export default Component;
