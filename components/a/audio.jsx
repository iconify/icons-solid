import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf7p2-bce.css';
import '../../css/i/idjuv0btd.css';
import '../../css/y/y7pnu2bvg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cf7p2-bce"><path class="idjuv0btd"/><path class="y7pnu2bvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:audio"} {...others} />);
}

export default Component;
