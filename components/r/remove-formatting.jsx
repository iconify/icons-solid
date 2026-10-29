import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/frqxfdc5f.css';
import '../../css/c/cw9hbob4z.css';
import '../../css/t/tc24unbff.css';
import '../../css/p/pmtfimecd.css';
import '../../css/x/xrbmpy6hd.css';
import '../../css/e/ean3its1c.css';
import '../../css/v/v6iy9db0s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="frqxfdc5f wm-k"/><path class="cw9hbob4z wm-k"/><path class="tc24unbff wm-k"/><path class="pmtfimecd wm-shine"/><path class="wm-s xrbmpy6hd"/><path class="ean3its1c wm-s"/><path class="v6iy9db0s wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:remove-formatting"} {...others} />);
}

export default Component;
