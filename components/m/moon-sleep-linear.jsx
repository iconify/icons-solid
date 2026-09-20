import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x8uid8bbr.css';
import '../../css/l/l-8z1dbaq.css';
import '../../css/z/z6gnys5nb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x8uid8bbr"/><path class="l-8z1dbaq"/><path class="z6gnys5nb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:moon-sleep-linear"} {...others} />);
}

export default Component;
