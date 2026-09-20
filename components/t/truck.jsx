import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z2ns83bht.css';
import '../../css/u/ujv6n5bmi.css';
import '../../css/l/lauwqs8mt.css';
import '../../css/l/l5q_j8fuy.css';
import '../../css/v/vx6mszb2a.css';
import '../../css/w/wp57mfoga.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z2ns83bht"/><path clip-rule="evenodd" class="ujv6n5bmi"/><path clip-rule="evenodd" class="lauwqs8mt"/><path class="l5q_j8fuy"/><path clip-rule="evenodd" class="vx6mszb2a"/><path clip-rule="evenodd" class="wp57mfoga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:truck"} {...others} />);
}

export default Component;
