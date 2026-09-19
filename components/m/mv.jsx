import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ysm6kgbvw.css';
import '../../css/w/w3rad0bwq.css';
import '../../css/c/cloky08hd.css';
import '../../css/x/xi8a1wbvw.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="ysm6kgbvw"/><path class="w3rad0bwq"/><circle class="cloky08hd"/><circle class="xi8a1wbvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:mv"} {...others} />);
}

export default Component;
