import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq9270lis.css';
import '../../css/w/w1a_s9bsr.css';
import '../../css/r/rne3g0oqs.css';

const viewBox = {"width":300,"height":200};
const content = `<g class="ft5dv1b6b"><path class="wq9270lis"/><path class="w1a_s9bsr"/><path class="rne3g0oqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ge"} {...others} />);
}

export default Component;
