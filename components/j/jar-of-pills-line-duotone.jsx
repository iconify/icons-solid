import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f3p-g4m6q.css';
import '../../css/q/qj0qu-5ec.css';
import '../../css/f/f-d2l1b3s.css';
import '../../css/u/untnup1qs.css';
import '../../css/h/hpzuy57gm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f3p-g4m6q"/><path class="qj0qu-5ec"/><path class="f-d2l1b3s"/><path class="untnup1qs"/><path class="hpzuy57gm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:jar-of-pills-line-duotone"} {...others} />);
}

export default Component;
