import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t-z7xub8k.css';
import '../../css/a/ahjpa3bwy.css';
import '../../css/q/q1jjt9b_b.css';
import '../../css/y/yikp27blk.css';
import '../../css/d/dvguk2nbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t-z7xub8k"/><path class="ahjpa3bwy"/><path class="q1jjt9b_b"/><path class="yikp27blk"/><path class="dvguk2nbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hop"} {...others} />);
}

export default Component;
