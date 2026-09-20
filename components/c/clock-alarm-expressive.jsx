import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n6acdccgq.css';
import '../../css/h/h1utcdbud.css';
import '../../css/g/gq2tbfb-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n6acdccgq"/><path clip-rule="evenodd" class="h1utcdbud"/><path class="gq2tbfb-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:clock-alarm-expressive"} {...others} />);
}

export default Component;
