import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p69k2hb-c.css';
import '../../css/h/hsy_ihbwj.css';
import '../../css/k/kc5exl21q.css';

const viewBox = {"width":784.203,"height":1000,"left":-252.435,"top":-223.924};
const content = `<path class="p69k2hb-c"/><path class="hsy_ihbwj"/><path class="kc5exl21q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:warner-bros"} {...others} />);
}

export default Component;
