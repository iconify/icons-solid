import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7fotrofa.css';
import '../../css/c/cvoblb3gp.css';
import '../../css/m/m3big068d.css';
import '../../css/x/xkvjvacay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="h7fotrofa"/><path class="cvoblb3gp"/><path class="m3big068d"/><path class="xkvjvacay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:seek-backward-sixty-rtl"} {...others} />);
}

export default Component;
