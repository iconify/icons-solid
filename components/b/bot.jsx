import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w7_vazn9d.css';
import '../../css/w/wh0tzmd6d.css';
import '../../css/j/jefb58bpl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w7_vazn9d"/><rect class="wh0tzmd6d"/><path class="jefb58bpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bot"} {...others} />);
}

export default Component;
