import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuf42lb8e.css';
import '../../css/w/wqnhesbmp.css';
import '../../css/s/s5v75ybaq.css';
import '../../css/x/xuia6kbyj.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="kuf42lb8e"><path class="wqnhesbmp"/><path class="s5v75ybaq"/><path class="xuia6kbyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kimi"} {...others} />);
}

export default Component;
