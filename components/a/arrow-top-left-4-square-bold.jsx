import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0phu2bbs.css';
import '../../css/v/vkur1dxhw.css';
import '../../css/e/exm6i4gtw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s0phu2bbs"><path class="vkur1dxhw"/><path class="exm6i4gtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-top-left-4-square-bold"} {...others} />);
}

export default Component;
