import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzi5jpiyt.css';
import '../../css/q/qirpgzb7b.css';
import '../../css/p/p5hg2wbjn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mzi5jpiyt"/><path class="qirpgzb7b"/><path class="p5hg2wbjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:coupon"} {...others} />);
}

export default Component;
