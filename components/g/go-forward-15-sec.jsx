import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z2v799ugg.css';
import '../../css/l/l9gydfb8l.css';
import '../../css/t/t2c-yabxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z2v799ugg"/><path class="l9gydfb8l"/><path class="t2c-yabxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:go-forward-15-sec"} {...others} />);
}

export default Component;
