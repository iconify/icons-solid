import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls2ylxzsf.css';
import '../../css/h/h64xwhb-p.css';
import '../../css/b/brxst2bdv.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="ls2ylxzsf"/><path class="h64xwhb-p"/><path class="brxst2bdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:sl"} {...others} />);
}

export default Component;
