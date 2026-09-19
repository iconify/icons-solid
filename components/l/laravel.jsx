import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhb8c01ug.css';
import '../../css/k/ki6om5blk.css';
import '../../css/w/w3blszelr.css';
import '../../css/g/g97xns1ip.css';
import '../../css/y/yyx32dxar.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hhb8c01ug"><path class="ki6om5blk"/><path class="w3blszelr"/><path class="g97xns1ip"/><path class="yyx32dxar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:laravel"} {...others} />);
}

export default Component;
