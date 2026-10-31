import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2zjz-bfb.css';
import '../../css/t/tfz96s17u.css';
import '../../css/m/m4h9f1bjh.css';
import '../../css/v/v58qiyd7m.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="x2zjz-bfb"/><circle class="tfz96s17u"/><circle class="m4h9f1bjh"/><path class="v58qiyd7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:tr"} {...others} />);
}

export default Component;
