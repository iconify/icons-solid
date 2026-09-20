import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztkp9ub7o.css';
import '../../css/f/fj4ytpy1i.css';
import '../../css/k/kxzzrfb2l.css';
import '../../css/n/n61bilb_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ztkp9ub7o"/><path class="fj4ytpy1i"/><path class="kxzzrfb2l"/><path class="n61bilb_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:gentleman"} {...others} />);
}

export default Component;
