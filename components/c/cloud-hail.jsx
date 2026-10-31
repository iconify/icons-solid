import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/l1cpr8bjj.css';
import '../../css/k/k1pmlf02a.css';
import '../../css/n/n1y1i5mpe.css';
import '../../css/o/o2n2poguz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="l1cpr8bjj wm-shadow"/><path class="k1pmlf02a wm-shadow"/><path class="n1y1i5mpe"/><path class="o2n2poguz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cloud-hail"} {...others} />);
}

export default Component;
